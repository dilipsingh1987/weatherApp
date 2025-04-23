import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { useTheme } from '../theme/ThemeContext';
import screenStyle from '../styles/screenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeToggle from '../components/ThemeToggle';
import WeatherCard from '../components/WeatherCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const WeatherScreen = () => {
  const { isDarkMode } = useTheme();
  const [city, setCity] = useState('');
  const [lastCityLabel, setLastCityLabel] = useState('');
  const { data, loading, error, getWeather } = useWeather();

  useEffect(() => {
    (async () => {
      const lastCity = await AsyncStorage.getItem('lastCity');
      if (lastCity) {
        setCity(lastCity);
        setLastCityLabel(`Last searched city: ${lastCity}`);
        getWeather(lastCity);
      }
    })();
  }, []);

  const clearLastSearch = async () => {
    await AsyncStorage.removeItem('lastCity');
    setLastCityLabel('');
    setCity('');
  };

  return (
    <SafeAreaView
      style={[screenStyle.container, isDarkMode ? screenStyle.darkBg : screenStyle.lightBg]}
    >
      <View>
        {lastCityLabel !== '' && (
          <Text style={[screenStyle.textStyle, screenStyle.marginBottom10]}>{lastCityLabel}</Text>
        )}

        <TextInput
          placeholder="Enter city"
          placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
          value={city}
          onChangeText={setCity}
          style={[
            screenStyle.input,
            isDarkMode ? screenStyle.textInputDark : screenStyle.textInputLight,
          ]}
        />
        <Button title="Get Weather" onPress={() => getWeather(city)} />
        <Button title="Clear Last Search" onPress={clearLastSearch} />
        {/* <Button title="Toggle Theme" onPress={toggleTheme} /> */}
        <ThemeToggle></ThemeToggle>

        {loading && <ActivityIndicator />}
        {error && <Text style={screenStyle.textStyle}>{error}</Text>}
        {data && <WeatherCard data={data} />}
      </View>
    </SafeAreaView>
  );
};

export default WeatherScreen;

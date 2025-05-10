import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { useTheme } from '../theme/ThemeContext';
import screenStyle, { darkStyles, lightStyles } from '../styles/screenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[screenStyle.container, isDarkMode ? screenStyle.darkBg : screenStyle.lightBg]}
    >
      {/* Last City Label */}
      {lastCityLabel !== '' && (
        <Text style={[screenStyle.textStyle, screenStyle.marginBottom10]}>{lastCityLabel}</Text>
      )}

      {/* Search Input */}
      <View style={screenStyle.inputWrapper}>
        <TextInput
          placeholder="Enter city"
          placeholderTextColor={styles.placeholder.color}
          value={city}
          onChangeText={setCity}
          style={[
            screenStyle.input,
            isDarkMode ? screenStyle.textInputDark : screenStyle.textInputLight,
            screenStyle.textInputWithButton,
          ]}
        />
        <TouchableOpacity onPress={() => getWeather(city)} style={screenStyle.searchButton}>
          <Text
            style={[
              screenStyle.searchText,
              isDarkMode ? screenStyle.searchTextDark : screenStyle.searchTextLight,
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* Loader / Error / Weather Card */}
      {loading && <ActivityIndicator testID="ActivityIndicator" />}
      {error && <Text style={screenStyle.textStyle}>{error}</Text>}
      {data && <WeatherCard data={data} />}
    </SafeAreaView>
  );
};

export default WeatherScreen;

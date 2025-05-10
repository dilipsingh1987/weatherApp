import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { useTheme } from '../theme/ThemeContext';
import screenStyle from '../styles/screenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WeatherCard from '../components/WeatherCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeToggle from '../components/ThemeToggle';

const WeatherScreen = () => {
  const { isDarkMode } = useTheme();
  const [city, setCity] = useState('');
  const [lastCityLabel, setLastCityLabel] = useState('');
  const { data, loading, error, getWeather } = useWeather();
  const [menuVisible, setMenuVisible] = useState(false);

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

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <SafeAreaView
      style={[screenStyle.container, isDarkMode ? screenStyle.darkBg : screenStyle.lightBg]}
    >
      {/* Header with Menu */}
      <View style={screenStyle.headerContainer}>
        <TouchableOpacity onPress={toggleMenu} style={screenStyle.menuButton}>
          <Text
            style={[
              screenStyle.menuIcon,
              isDarkMode ? screenStyle.menuIconDark : screenStyle.menuIconLight,
            ]}
          >
            ☰
          </Text>
        </TouchableOpacity>

        {menuVisible && (
          <View style={screenStyle.dropdownMenu}>
            <TouchableOpacity
              onPress={() => {
                clearLastSearch();
                setMenuVisible(false);
              }}
            >
              <Text style={screenStyle.menuItems}>Clear Last Search</Text>
            </TouchableOpacity>
            <ThemeToggle onClose={() => setMenuVisible(false)} />
          </View>
        )}
      </View>

      {/* Last City Label */}
      {lastCityLabel !== '' && (
        <Text style={[screenStyle.textStyle, screenStyle.marginBottom10]}>{lastCityLabel}</Text>
      )}

      {/* Search Input */}
      <View style={screenStyle.inputWrapper}>
        <TextInput
          placeholder="Enter city"
          placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
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

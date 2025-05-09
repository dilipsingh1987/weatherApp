import React from 'react';
import { View, Text, Image } from 'react-native';
import { WeatherData } from '../types/weather';
import { stylesWeatherCard } from '../styles/weatherCardStyle';
import screenStyle from '../styles/screenStyles';
import { useTheme } from '../theme/ThemeContext';
import { formatCelsiusWithUnit } from '../utils/temperature';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { isDarkMode } = useTheme();

  const cardStyle = {
    backgroundColor: isDarkMode ? '#263238' : '#e0f7fa',
  };

  const cityTextStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  const tempTextStyle = {
    color: isDarkMode ? '#4dd0e1' : '#00796b',
  };

  const conditionTextStyle = {
    color: isDarkMode ? '#80cbc4' : '#004d40',
  };

  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind: { speed, deg },
    dt,
  } = data;

  const description = weather[0]?.description ?? '';
  const iconCode = weather[0]?.icon ?? '01d';
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={[stylesWeatherCard.card, cardStyle]}>
      <Text style={[stylesWeatherCard.city, cityTextStyle]}>
        {name}, {country}
      </Text>
      <Text style={[stylesWeatherCard.temp, tempTextStyle]}>{formatCelsiusWithUnit(temp)}</Text>

      <View style={screenStyle.row}>
        <Text style={[stylesWeatherCard.condition, conditionTextStyle]}>{description}</Text>
        <Image
          source={{ uri: iconUrl }}
          style={[screenStyle.icon, { width: 50, height: 50 }]}
          resizeMode="contain"
        />
      </View>

      <Text style={screenStyle.textStyle}>Feels Like: {formatCelsiusWithUnit(feels_like)}</Text>
      <Text style={screenStyle.textStyle}>Humidity: {humidity}%</Text>
      <Text style={screenStyle.textStyle}>Pressure: {pressure} hPa</Text>
      <Text style={screenStyle.textStyle}>
        Wind: {speed} m/s, Direction: {deg}°
      </Text>
      <Text style={screenStyle.textStyle}>Sunrise: {formatTime(sunrise)}</Text>
      <Text style={screenStyle.textStyle}>Sunset: {formatTime(sunset)}</Text>
      <Text style={screenStyle.textStyle}>Reported at: {formatTime(dt)}</Text>
    </View>
  );
};

export default WeatherCard;

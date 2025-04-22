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

  const weatherIcon = data.weather[0].main.toLowerCase();
  const iconSource =
    weatherIcon === 'rain'
      ? require('../assets/icons/icon_rainy.png')
      : weatherIcon === 'clear'
        ? require('../assets/icons/icon_sun.png')
        : weatherIcon === 'clouds'
          ? require('../assets/icons/icon_cloud.png')
          : require('../assets/icons/icon_sun.png');

  return (
    <View style={[stylesWeatherCard.card, cardStyle]}>
      <View>
        <Text style={[stylesWeatherCard.city, cityTextStyle]}>{data.name}</Text>
        <Text style={[stylesWeatherCard.temp, tempTextStyle]}>
          {formatCelsiusWithUnit(data.main.temp)}
        </Text>
        <View style={screenStyle.row}>
          <Text style={[stylesWeatherCard.condition, conditionTextStyle]}>
            {data.weather[0].main}
          </Text>
          <Image source={iconSource} style={screenStyle.icon} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

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
  return (
    <View
      style={[
        stylesWeatherCard.card,
        {
          backgroundColor: isDarkMode ? '#263238' : '#e0f7fa', // dynamic bg color
        },
      ]}
    >
      <View>
        <Text style={[stylesWeatherCard.city, { color: isDarkMode ? '#fff' : '#000' }]}>
          {data.name}
        </Text>
        <Text style={[stylesWeatherCard.temp, { color: isDarkMode ? '#4dd0e1' : '#00796b' }]}>
          {formatCelsiusWithUnit(data.main.temp)}
        </Text>
        <View style={screenStyle.row}>
          <Text
            style={[stylesWeatherCard.condition, { color: isDarkMode ? '#80cbc4' : '#004d40' }]}
          >
            {data.weather[0].main}
          </Text>
          <Image
            source={
              data.weather[0].main.toLowerCase() === 'rain'
                ? require('../assets/icons/icon_rainy.png')
                : data.weather[0].main.toLowerCase() === 'clear'
                  ? require('../assets/icons/icon_sun.png')
                  : data.weather[0].main.toLowerCase() === 'clouds'
                    ? require('../assets/icons/icon_cloud.png')
                    : require('../assets/icons/icon_sun.png') // default
            }
            style={screenStyle.icon}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

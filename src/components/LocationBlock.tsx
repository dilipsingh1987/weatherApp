import React from 'react';
import { Text, View, Image } from 'react-native';
import { stylesWeatherCard } from '../styles/weatherCardStyle';
import { formatCelsiusWithUnit } from '../utils/temperature';

interface LocationBlockProps {
  city: string;
  country: string;
  temperature: number;
  iconUrl: string;
  description: string;
  timestamp: number;
  textColor: string;
}

const LocationBlock: React.FC<LocationBlockProps> = ({
  city,
  country,
  temperature,
  iconUrl,
  description,
  timestamp,
  textColor,
}) => {
  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={stylesWeatherCard.topSection}>
      <View style={stylesWeatherCard.locationBlock}>
        <Text style={[stylesWeatherCard.cityText, { color: textColor }]}>{city}</Text>
        <Text style={[stylesWeatherCard.countryText, { color: textColor }]}>{country}</Text>
        <Text style={[stylesWeatherCard.tempText, { color: textColor }]}>
          {formatCelsiusWithUnit(temperature)}
        </Text>
        <Text style={[stylesWeatherCard.reportedText, { color: textColor }]}>
          Observed at {formatTime(timestamp)}
        </Text>
      </View>
      <View style={stylesWeatherCard.iconBlock}>
        <Image
          testID="weather-icon"
          source={{ uri: iconUrl }}
          style={stylesWeatherCard.weatherIcon}
          resizeMode="contain"
        />
        <Text style={[stylesWeatherCard.conditionText, { color: textColor }]}>{description}</Text>
      </View>
    </View>
  );
};

export default LocationBlock;

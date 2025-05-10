import React from 'react';
import { Text, View } from 'react-native';
import { stylesWeatherCard } from '../styles/weatherCardStyle';

interface FeelsLikeSectionProps {
  feelsLike: number;
  humidity: number;
  textColor: string;
  backgroundColor: string;
}

const FeelsLikeSection: React.FC<FeelsLikeSectionProps> = ({
  feelsLike,
  humidity,
  textColor,
  backgroundColor,
}) => (
  <View style={[stylesWeatherCard.subCard, { backgroundColor }]}>
    <Text style={[stylesWeatherCard.subTitle, { color: textColor }]}>🧊 Feels Like</Text>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>
      Feels like: {Math.round(feelsLike)}°C
    </Text>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>Humidity: {humidity}%</Text>
  </View>
);

export default FeelsLikeSection;

import React from 'react';
import { Text, View } from 'react-native';
import { stylesWeatherCard } from '../styles/weatherCardStyle';

interface WindSectionProps {
  speed: number;
  deg: number;
  pressure: number;
  textColor: string;
  backgroundColor: string;
}

const WindSection: React.FC<WindSectionProps> = ({
  speed,
  deg,
  pressure,
  textColor,
  backgroundColor,
}) => (
  <View style={[stylesWeatherCard.subCard, { backgroundColor }]}>
    <Text style={[stylesWeatherCard.subTitle, { color: textColor }]}>💨 Wind</Text>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>Wind: {speed} kph</Text>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>Direction: {deg}°</Text>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>Pressure: {pressure} hPa</Text>
  </View>
);

export default WindSection;

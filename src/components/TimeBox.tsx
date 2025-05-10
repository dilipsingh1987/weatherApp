import React from 'react';
import { Text, View } from 'react-native';
import { stylesWeatherCard } from '../styles/weatherCardStyle';

interface TimeBoxProps {
  label: string;
  value: string;
  textColor: string;
  backgroundColor: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ label, value, textColor, backgroundColor }) => (
  <View style={[stylesWeatherCard.timeBox, { backgroundColor }]}>
    <Text style={[stylesWeatherCard.label, { color: textColor }]}>{label}</Text>
    <Text style={[stylesWeatherCard.value, { color: textColor }]}>{value}</Text>
  </View>
);

export default TimeBox;

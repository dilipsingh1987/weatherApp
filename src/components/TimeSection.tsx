import React from 'react';
import { View } from 'react-native';
import TimeBox from './TimeBox';
import { stylesWeatherCard } from '../styles/weatherCardStyle';

interface TimeSectionProps {
  sunrise: number;
  sunset: number;
  textColor: string;
  backgroundColor: string;
}

const TimeSection: React.FC<TimeSectionProps> = ({
  sunrise,
  sunset,
  textColor,
  backgroundColor,
}) => {
  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={stylesWeatherCard.timeRow}>
      <TimeBox
        label="Sunrise"
        value={formatTime(sunrise)}
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
      <TimeBox
        label="Sunset"
        value={formatTime(sunset)}
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
      <TimeBox
        label="Moonrise"
        value="05:00 AM"
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
      <TimeBox
        label="Moonset"
        value="06:40 PM"
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default TimeSection;

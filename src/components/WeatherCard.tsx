import React from 'react';
import { View } from 'react-native';
import { WeatherData } from '../types/weather';
import { useTheme } from '../theme/ThemeContext';
import { stylesWeatherCard } from '../styles/weatherCardStyle';
import LocationBlock from './LocationBlock';
import TimeSection from './TimeSection';
import WindSection from './WindSection';
import FeelsLikeSection from './FeelsLikeSection';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { isDarkMode } = useTheme();
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

  const boxBg = isDarkMode ? '#37474F' : '#f1f1f1';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View
      style={[
        stylesWeatherCard.cardContainer,
        isDarkMode ? stylesWeatherCard.cardDark : stylesWeatherCard.cardLight,
      ]}
    >
      <LocationBlock
        city={name}
        country={country}
        temperature={temp}
        iconUrl={iconUrl}
        description={description}
        timestamp={dt}
        textColor={textColor}
      />

      <TimeSection
        sunrise={sunrise}
        sunset={sunset}
        textColor={textColor}
        backgroundColor={boxBg}
      />
      <WindSection
        speed={speed}
        deg={deg}
        pressure={pressure}
        textColor={textColor}
        backgroundColor={boxBg}
      />
      <FeelsLikeSection
        feelsLike={feels_like}
        humidity={humidity}
        textColor={textColor}
        backgroundColor={boxBg}
      />
    </View>
  );
};

export default WeatherCard;

import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';
import { WeatherData } from '../src/types/weather';
import { ThemeContext } from '../src/theme/ThemeContext';

const mockWeatherData: WeatherData = {
  name: 'New York',
  main: {
    temp: 25,
    feels_like: 27,
    temp_min: 20,
    temp_max: 28,
    pressure: 1012,
    humidity: 60,
  },
  weather: [
    {
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  sys: {
    country: 'US',
    sunrise: 1715172850,
    sunset: 1715219440,
  },
  wind: {
    speed: 4.63,
    deg: 350,
  },
  dt: 1715195790,
};

const renderWithTheme = (isDarkMode = false) =>
  render(
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: jest.fn() }}>
      <WeatherCard data={mockWeatherData} />
    </ThemeContext.Provider>,
  );

describe('WeatherCard', () => {
  it('renders correctly in light mode', () => {
    const { getByText } = renderWithTheme(false);
    expect(getByText('New York')).toBeTruthy();
    expect(getByText('US')).toBeTruthy();
    expect(getByText('clear sky')).toBeTruthy();
    expect(getByText('25°C')).toBeTruthy();
    expect(getByText(/Feels like:\s*27\s*°C/i)).toBeTruthy();
    expect(getByText('Humidity: 60%')).toBeTruthy();
    expect(getByText('Pressure: 1012 hPa')).toBeTruthy();
    expect(getByText('Wind: 4.63 kph')).toBeTruthy();
    expect(getByText('Direction: 350°')).toBeTruthy();
    expect(getByText('Sunrise')).toBeTruthy();
    expect(getByText('Sunset')).toBeTruthy();
    expect(getByText('Moonrise')).toBeTruthy();
    expect(getByText('Moonset')).toBeTruthy();
  });

  it('renders correctly in dark mode', () => {
    const { getByText } = renderWithTheme(true);
    expect(getByText('New York')).toBeTruthy();
    expect(getByText('US')).toBeTruthy();
    expect(getByText('clear sky')).toBeTruthy();
    expect(getByText('25°C')).toBeTruthy();
  });

  it('renders correct weather icon', () => {
    const { getByTestId } = renderWithTheme();
    const icon = getByTestId('weather-icon');
    expect(icon.props.source.uri).toBe('https://openweathermap.org/img/wn/01d@2x.png');
  });
});

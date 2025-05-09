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

describe('WeatherCard', () => {
  it('renders correctly with light mode', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: jest.fn() }}>
        <WeatherCard data={mockWeatherData} />
      </ThemeContext.Provider>,
    );

    expect(getByText('New York, US')).toBeTruthy();
    expect(getByText('clear sky')).toBeTruthy();
    expect(getByText('25°C')).toBeTruthy();
    expect(getByText('Feels Like: 27°C')).toBeTruthy();
    expect(getByText('Humidity: 60%')).toBeTruthy();
    expect(getByText('Pressure: 1012 hPa')).toBeTruthy();
    expect(getByText('Wind: 4.63 m/s, Direction: 350°')).toBeTruthy();
    expect(getByText(/Sunrise:/)).toBeTruthy();
    expect(getByText(/Sunset:/)).toBeTruthy();
    expect(getByText(/Reported at:/)).toBeTruthy();
  });

  it('renders correctly with dark mode', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={{ isDarkMode: true, toggleTheme: jest.fn() }}>
        <WeatherCard data={mockWeatherData} />
      </ThemeContext.Provider>,
    );

    expect(getByText('New York, US')).toBeTruthy();
    expect(getByText('clear sky')).toBeTruthy();
    expect(getByText('25°C')).toBeTruthy();
  });

  it('renders correct weather icon URL', () => {
    const { getByTestId } = render(
      <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: jest.fn() }}>
        <WeatherCard data={mockWeatherData} />
      </ThemeContext.Provider>,
    );

    const image = getByTestId('weather-icon');
    expect(image.props.source.uri).toContain('https://openweathermap.org/img/wn/01d@2x.png');
  });
});

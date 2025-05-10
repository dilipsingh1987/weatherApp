import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import WeatherScreen from '../src/screens/WeatherScreen';
import * as useWeatherHook from '../src/hooks/useWeather';
import { ThemeContext } from '../src/theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Mock separated components
jest.mock('../src/components/ThemeToggle', () => 'ThemeToggle');
jest.mock('../src/components/WeatherCard', () => 'WeatherCard');

describe('WeatherScreen', () => {
  const mockGetWeather = jest.fn();

  const mockWeather = {
    city: 'London',
    data: {
      name: 'London',
      main: {
        temp: 18,
        feels_like: 17,
        temp_min: 16,
        temp_max: 20,
        pressure: 1015,
        humidity: 50,
      },
      weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      sys: { country: 'GB', sunrise: 1600000000, sunset: 1600040000 },
      wind: { speed: 4, deg: 180 },
      dt: 1600020000,
    },
    loading: false,
    error: null,
    getWeather: mockGetWeather,
  };

  beforeEach(() => {
    jest.spyOn(useWeatherHook, 'useWeather').mockReturnValue(mockWeather);
    jest.clearAllMocks();
  });

  const renderWithTheme = (isDarkMode = false) =>
    render(
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme: jest.fn() }}>
        <WeatherScreen />
      </ThemeContext.Provider>,
    );

  it('renders input and buttons', () => {
    const { getByPlaceholderText, getByText } = render(<WeatherScreen />);

    expect(getByPlaceholderText('Enter city')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();

    // 🔑 Tap the ☰ menu button to reveal dropdown options
    fireEvent.press(getByText('☰'));

    // ✅ Now this will work because the menu is visible
    expect(getByText('Clear Last Search')).toBeTruthy();
  });

  it('calls getWeather with entered city', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme();
    const input = getByPlaceholderText('Enter city');
    fireEvent.changeText(input, 'London');
    fireEvent.press(getByText('Search')); // updated label
    expect(mockGetWeather).toHaveBeenCalledWith('London');
  });

  it('clears last search when Clear button pressed', async () => {
    const { getByText } = renderWithTheme();

    fireEvent.press(getByText('☰')); // open menu first
    fireEvent.press(getByText('Clear Last Search'));

    await waitFor(() => {
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('lastCity');
    });
  });

  it('loads last city from AsyncStorage on mount', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('Paris');
    renderWithTheme();
    await waitFor(() => {
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('lastCity');
      expect(mockGetWeather).toHaveBeenCalledWith('Paris');
    });
  });

  it('displays error message', () => {
    jest.spyOn(useWeatherHook, 'useWeather').mockReturnValueOnce({
      ...mockWeather,
      error: 'City not found',
    });
    const { getByText } = renderWithTheme();
    expect(getByText('City not found')).toBeTruthy();
  });

  it('shows loader when loading', () => {
    jest.spyOn(useWeatherHook, 'useWeather').mockReturnValueOnce({
      ...mockWeather,
      loading: true,
    });
    const { getByTestId } = renderWithTheme();
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });
});

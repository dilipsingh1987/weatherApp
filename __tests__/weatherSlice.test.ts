import weatherReducer, { weatherActions } from '../src/redux/slices/weatherSlice';
import { WeatherState, WeatherData } from '../src/types/weather';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
}));

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

const mockData: WeatherData = {
  name: 'London',
  main: {
    temp: 20,
    feels_like: 18,
    temp_min: 17,
    temp_max: 22,
    pressure: 1012,
    humidity: 65,
  },
  weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
  sys: { country: 'GB', sunrise: 1650000000, sunset: 1650040000 },
  wind: { speed: 5, deg: 250 },
  dt: 1650020000,
};

describe('weatherSlice', () => {
  it('should handle fetchWeatherStart', () => {
    const state = weatherReducer(initialState, weatherActions.fetchWeatherStart(''));
    expect(state.loading).toBe(true);
    expect(state.error).toBe('');
  });

  it('should handle fetchWeatherSuccess', () => {
    const state = weatherReducer(initialState, weatherActions.fetchWeatherSuccess(mockData));
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockData);
    expect(state.city).toBe('London');
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('lastCity', 'London');
  });

  it('should handle fetchWeatherFailure', () => {
    const state = weatherReducer(initialState, weatherActions.fetchWeatherFailure('Error'));
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error');
  });
});

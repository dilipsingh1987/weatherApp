import { runSaga } from 'redux-saga';
import * as api from '../src/services/weatherService';
import * as NetInfo from '@react-native-community/netinfo';
import { weatherActions } from '../src/redux/slices/weatherSlice';
import { handleFetchWeather } from '../src/redux/sagas/weatherSaga';
import { PayloadAction } from '@reduxjs/toolkit';

jest.mock('../src/services/weatherService');
jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
}));

import { WeatherData } from '../src/types/weather';

type WeatherAction =
  | PayloadAction<string> // for fetchWeatherStart, fetchWeatherFailure
  | PayloadAction<WeatherData>; // for fetchWeatherSuccess

const dispatched: WeatherAction[] = [];

const mockWeatherData = {
  name: 'London',
  main: {
    temp: 20,
    feels_like: 18,
    temp_min: 15,
    temp_max: 22,
    pressure: 1012,
    humidity: 60,
  },
  weather: [
    {
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  sys: {
    country: 'GB',
    sunrise: 1650000000,
    sunset: 1650040000,
  },
  wind: {
    speed: 5,
    deg: 250,
  },
  dt: 1650020000,
};

const run = async (action: { payload: string; type: string }) =>
  await runSaga(
    {
      dispatch: action => dispatched.push(action as WeatherAction),
    },
    handleFetchWeather,
    action,
  ).toPromise();

beforeEach(() => {
  dispatched.length = 0;
  jest.clearAllMocks();
});

describe('handleFetchWeather Saga', () => {
  it('should handle successful API call', async () => {
    (NetInfo.fetch as jest.Mock).mockResolvedValue({ isConnected: true });
    (api.fetchWeatherByCity as jest.Mock).mockResolvedValue(mockWeatherData);

    await run(weatherActions.fetchWeatherStart('London'));

    expect(dispatched).toContainEqual(weatherActions.fetchWeatherSuccess(mockWeatherData));
  });

  it('should handle failed API call', async () => {
    (NetInfo.fetch as jest.Mock).mockResolvedValue({ isConnected: true });
    (api.fetchWeatherByCity as jest.Mock).mockRejectedValue(new Error('API Error'));

    await run(weatherActions.fetchWeatherStart('Paris'));

    expect(dispatched).toContainEqual(weatherActions.fetchWeatherFailure('API Error'));
  });

  it('should handle no internet connection', async () => {
    (NetInfo.fetch as jest.Mock).mockResolvedValue({ isConnected: false });

    await run(weatherActions.fetchWeatherStart('Tokyo'));

    expect(dispatched).toContainEqual(
      weatherActions.fetchWeatherFailure('No internet connection.'),
    );
  });
});

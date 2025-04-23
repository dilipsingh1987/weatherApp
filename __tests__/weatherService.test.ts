import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchWeatherByCity } from '../src/services/weatherService';
import { BASE_URL } from '../src/config/apiConfig';

describe('fetchWeatherByCity', () => {
  it('should return weather data for a valid city', async () => {
    const mock = new MockAdapter(axios);
    const city = 'London';
    const mockData = { name: city, main: { temp: 25 }, weather: [{ main: 'Clear' }] };

    mock.onGet(`${BASE_URL}/weather`).reply(config => {
      if (config.params.q === city) {
        return [200, mockData];
      }
      return [404, { message: 'City not found' }];
    });

    const data = await fetchWeatherByCity(city);
    expect(data.name).toBe(city);
  });
  it('should throw an error when city is not found', async () => {
    const mock = new MockAdapter(axios);
    const city = 'InvalidCity';

    mock.onGet(`${BASE_URL}/weather`).reply(404, { message: 'city not found' });

    await expect(fetchWeatherByCity(city)).rejects.toThrow('city not found');
  });

  it('should throw a generic error for network issues', async () => {
    const mock = new MockAdapter(axios);
    const city = 'London';

    mock.onGet(`${BASE_URL}/weather`).networkError();

    await expect(fetchWeatherByCity(city)).rejects.toThrow('Network Error');
  });
});

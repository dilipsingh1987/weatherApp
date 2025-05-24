import axios from 'axios';
import { OPENWEATHER_API_KEY, BASE_URL } from '../config/apiConfig';
import { WeatherData } from '../types/weather';

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  if (!OPENWEATHER_API_KEY) {
    throw new Error(
      'Missing OpenWeather API key. Please define OPENWEATHER_API_KEY in your .env file.',
    );
  }
  try {
    const response = await axios.get<WeatherData>(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const apiMessage = error.response?.data?.message || error.message;
      throw new Error(apiMessage);
    }

    throw new Error('Unknown error occurred while fetching weather');
  }
};

import axios from 'axios';
import { OPENWEATHER_API_KEY, BASE_URL } from '../config/apiConfig';

export const fetchWeatherByCity = async (city: string) => {
  try {
    //console.log('API KEY:', OPENWEATHER_API_KEY);

    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('Weather API error:', error?.response?.data || error.message);
    throw new Error(error?.response?.data?.message || 'Failed to fetch weather');
  }
};

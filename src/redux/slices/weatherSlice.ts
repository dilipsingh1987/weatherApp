import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherByCity } from '../../services/weatherService';
import { WeatherState } from '../../types/weather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, thunkAPI) => {
    try {
      return await fetchWeatherByCity(city);
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to fetch weather data.');
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.city = action.payload.name;
        AsyncStorage.setItem('lastCity', action.payload.name);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;

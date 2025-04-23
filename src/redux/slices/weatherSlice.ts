import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData, WeatherState } from '../../types/weather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = action.payload;
    },
    fetchWeatherSuccess: (state, action: PayloadAction<WeatherData>) => {
      state.loading = false;
      state.data = action.payload;
      state.city = action.payload.name;
      AsyncStorage.setItem('lastCity', action.payload.name);
    },
    fetchWeatherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;

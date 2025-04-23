import { call, put, debounce } from 'redux-saga/effects';
import { fetch as netInfoFetch } from '@react-native-community/netinfo';
import { fetchWeatherByCity } from '../../services/weatherService';
import { weatherActions } from '../slices/weatherSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';

function* handleFetchWeather(action: PayloadAction<string>): SagaIterator {
  const city = action.payload;

  const netState = yield call(netInfoFetch);
  if (!netState.isConnected) {
    yield put(weatherActions.fetchWeatherFailure('No internet connection.'));
    return;
  }

  try {
    const data = yield call(fetchWeatherByCity, city);
    yield put(weatherActions.fetchWeatherSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(weatherActions.fetchWeatherFailure(error.message));
    } else {
      yield put(weatherActions.fetchWeatherFailure('Unknown error occurred'));
    }
  }
}

export function* watchWeatherSaga() {
  // Change debounce time (ms) as needed
  yield debounce(500, weatherActions.fetchWeatherStart.type, handleFetchWeather);
  // OR use takeLatest if you want to cancel previous requests
  // yield takeLatest(weatherActions.fetchWeatherStart.type, handleFetchWeather);
}

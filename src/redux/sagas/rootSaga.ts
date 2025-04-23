import { all } from 'redux-saga/effects';
import { watchWeatherSaga } from './weatherSaga';

export default function* rootSaga() {
  yield all([watchWeatherSaga()]);
}

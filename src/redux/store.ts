import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from './slices/weatherSlice';
import rootSaga from './sagas/rootSaga';

const reduxSaga = require('redux-saga');
const createSagaMiddleware = reduxSaga.default;
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

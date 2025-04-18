import { useDispatch } from 'react-redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/slices/weatherSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);

  const getWeather = (city: string) => {
    if (city.trim()) dispatch(fetchWeather(city));
  };

  return {
    ...weather,
    getWeather,
  };
};

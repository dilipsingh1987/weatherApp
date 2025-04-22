export interface WeatherState {
  city: string;
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherData {
  name: string;
  main: MainWeatherData;
  weather: WeatherCondition[];
}

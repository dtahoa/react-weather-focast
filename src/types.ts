export interface Weather {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  dt_txt?: string;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ForecastItem {
  date: number;
  humidity: number;
  icon_id: number | string;
  temperature: number;
  description: string;
  wind_speed: number;
  dt_txt: string;
  icon: string;
  max: number;
  min: number;
}

export interface WeatherFormated {
  city: string;
  country: string;
  date: number;
  humidity: number;
  icon_id: number | string;
  temperature: number;
  description: string;
  wind_speed: number;
  condition: number;
  dt_txt: string;
  icon: string;
  max: number;
  min: number;
}

export interface RouteType {
  path: string,
  name: string;
  component?: React.FunctionComponent;
  layout: string;
}

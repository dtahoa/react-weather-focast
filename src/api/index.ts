import { Weather } from '../types';

// eslint-disable-next-line
function handleResponse(response: any) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Error: City name ${response.statusText}`);
}
function getWeather(city: string) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => handleResponse(res))
    .then((weather) => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        return mappedData;
      }
      return weather;
    });
}

function getForecast(city: String) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => handleResponse(res))
    .then((result) => {
      if (Object.entries(result).length) {
        const forecast = [];
        for (let i = 0; i < result.list.length; i += 8) {
          forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
        }
        return forecast;
      }
      return result;
    });
}

function mapDataToWeatherInterface(data: Weather) {
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather ? data.weather[0].id : 0,
    temperature: data.main.temp,
    description: data.weather && data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod,
    dt_txt: data.dt_txt ? data.dt_txt : '',
    icon: data.weather ? data.weather[0].icon : '',
    max: data.main.temp_max,
    min: data.main.temp_min,
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather && data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = data.main.temp_max;
    mapped.min = data.main.temp_min;
  }

  return mapped;
}

export { getWeather, getForecast, handleResponse, mapDataToWeatherInterface };

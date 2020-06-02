import React, {useState, useEffect} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import Layout from "../layout";
import WeatherSearch from "../../components/search";
import {icons, recommendations} from "../../constants";
import {getWeather, getForecast} from '../../api';

const WeatherContainer: React.FC = () => {
  const [city, setCity] = useState("Ho Chi Minh");
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({} as any);
  const [forecast, setForecast] = useState([] as any);

  useEffect(() => {
    getWeather(city)
      .then((weather: any) => {
        setCurrentWeather(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [city, error]);

  useEffect(() => {
    getForecast(city)
      .then((data: any) => {
        setForecast(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [city, error]);

  const handleCityChange = (city: any) => {
    setCity(city);
  };

  
  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    const prefix = "wi wi-";
    const icon = prefix + icons[currentWeather.icon_id].icon;
    const recommendation = recommendations[currentWeather.icon_id].recommendation;

    return (
      <div>
        <WeatherSearch city={city} onCityChange={handleCityChange} error={error} />
        <Layout currentWeather={currentWeather} forecast={forecast} icon={icon} recommendation={recommendation} />
      </div>
    );
  } else {
    return (
      <div>
        <CircularProgress color={error ? "secondary" : "primary"} />
        {error ? <p>{error}</p> : ""}
      </div>
    );
  }
}

export default WeatherContainer; 

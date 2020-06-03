import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Grid } from '@material-ui/core';

import WeatherSearch from '../../components/search';
import WeatherInfo from '../../components/weatherInfo/weatherInfo';
import { icons } from '../../constants';
import { getWeather, getForecast } from '../../api';

import { WeatherFormated, ForecastItem } from '../../types';

const WeatherContainer: React.FC = () => {
  const [city, setCity] = useState('Ho Chi Minh');
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({} as WeatherFormated);
  const [forecast, setForecast] = useState([] as ForecastItem[]);
  const [loadingWeather, setLoadingWeather] = useState(false);

  useEffect(() => {
    setLoadingWeather(true);
    getWeather(city)
      .then((weather: WeatherFormated) => {
        setCurrentWeather(weather);
        setError(null);
        setLoadingWeather(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoadingWeather(false);
      });
  }, [city, error]);

  useEffect(() => {
    getForecast(city)
      .then((data: ForecastItem[]) => {
        setForecast(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [city, error]);

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    const prefix = 'wi wi-';
    const icon = prefix + icons[currentWeather.icon_id].icon;

    return (
      <Container maxWidth="md">
        <Grid container spacing={2} alignContent="center" justify="center">
          <WeatherSearch onCityChange={handleCityChange} error={error} />
          <WeatherInfo
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
            loadingWeather={loadingWeather}
          />
        </Grid>
      </Container>
    );
  }
  return (
    <div>
      <CircularProgress color={error ? 'secondary' : 'primary'} />
      {error ? <p>{error}</p> : ''}
    </div>
  );
};

export default WeatherContainer;

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  makeStyles,
  CardActions,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import SubHeader from './subHeader';
import Forecast from '../forecast';
import { WeatherFormated, ForecastItem } from '../../types';

interface WeatherInfoProps {
  loadingWeather: boolean;
  currentWeather: WeatherFormated;
  forecast: ForecastItem[];
  icon: string;
}

const useStyles = makeStyles({
  root: {
    paddingBottom: '0px',
  },
  card: {
    minWidth: 600,
    minHeight: 500,
  },
  iconTemp: {
    display: 'block',
    textAlign: 'center',
  },
  wi: {
    color: '#2d3436',
    borderRight: '1px solid #2d3436',
    padding: '20px',
    fontSize: '80px',
    display: 'inline-block',
  },
  temp: {
    display: 'inline-block',
    padding: '20px',
    margin: '20px 0',
  },
  tempDesc: {
    textAlign: 'center',
  },
});

const WeatherInfo = (props: WeatherInfoProps) => {
  const classes = useStyles();
  const { loadingWeather, currentWeather, forecast, icon } = props;

  return (
    <Grid item md={12} className={classes.root}>
      <Card className={classes.card}>
        {!loadingWeather ? (
          <>
            <CardHeader
              title={`${currentWeather.city} ${currentWeather.country}`}
              subheader={<SubHeader date={currentWeather.date} />}
            />
            <CardContent>
              <div className={classes.iconTemp}>
                <i className={`${icon} ${classes.wi}`} />
                <Typography
                  variant="h2"
                  className={classes.temp}
                  color="textPrimary"
                  component="h2"
                >
                  {Math.round(currentWeather.temperature)}&deg;C
                </Typography>
              </div>
              <Typography
                variant="h4"
                className={classes.tempDesc}
                color="textPrimary"
                component="h4"
              >
                {currentWeather.description.replace(/\w\S*/g, (txt: string) => {
                  return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                  );
                })}
              </Typography>
            </CardContent>
          </>
        ) :
          (
            <CircularProgress color="secondary" />
          )}
        <CardActions>
          <Forecast forecast={forecast} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default WeatherInfo;

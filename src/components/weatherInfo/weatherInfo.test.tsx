import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherInfo from './weatherInfo';
import { mockCurrentWeather, mockForecast } from '../../__mocks__/Weather.mock';
import '@testing-library/jest-dom/extend-expect';

describe('<WeatherInfo />', () => {
  let testProps = {} as any;
  beforeEach(() => {
    testProps = {
      currentWeather: mockCurrentWeather,
      forecast: mockForecast,
      icon: 'wi wi-day-cloudy-gusts',
      loadingWeather: false,
    };
  });

  test('renders the elements that make up the app layout', async () => {
    render(
      <WeatherInfo
        currentWeather={testProps.currentWeather}
        forecast={testProps.forecast}
        icon={testProps.icon}
        loadingWeather={testProps.loadingWeather}
      />
    );

    await screen.findByText('Eldoret KE');

    expect(screen.getByText('Eldoret KE')).toBeInTheDocument();
    expect(screen.getByText("Wed, 2:36PM")).toBeInTheDocument();
    expect(screen.getByText('19°C')).toBeInTheDocument();
    expect(screen.getByText("Few Clouds")).toBeInTheDocument();
  });
});

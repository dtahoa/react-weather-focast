import WeatherContainer from './containers/weather';

const dashRoutes = [
  {
    path: '/',
    name: 'WeatherDashboard',
    component: WeatherContainer,
    layout: '/',
  },
];

export default dashRoutes;

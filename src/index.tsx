import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import './index.css';
import WeatherContainer from "./containers/weather";
import Header from "./components/header";

import * as serviceWorker from './serviceWorker';
import NotFound from './components/notfound';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle1: {
      fontSize: 16,
      fontWeight: 'bold'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Container maxWidth="md">
          <Switch>
            <Route exact path='/' component={WeatherContainer} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

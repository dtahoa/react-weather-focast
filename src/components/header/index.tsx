import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { containerFluid } from '../../assets/styles';
import Logo from '../../cloud.svg';

const styles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginBottom: '0',
    position: 'absolute',
    width: '100%',
    height: '73px',
    paddingTop: '10px',
    zIndex: 1029,
    color: '#555555',
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block',
    borderBottom: '1px solid #0028641f',
  },
  container: {
    ...containerFluid,
    minHeight: '50px',
  },
  link: {
    textDecoration: 'none',
  },
  logo: {
    height: '40px',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});

export default function Header() {
  const classes = styles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <Link to="/" className={classes.link} data-testid="homeLink">
          <img src={Logo} className={classes.logo} alt="Weather Forecast" />{' '}
          Forecast App
        </Link>
      </Toolbar>
    </AppBar>
  );
}

import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

import { containerFluid } from '../../assets/styles';

const useStyles = makeStyles({
  container: { ...containerFluid },
  left: {
    float: 'left',
    display: 'block',
  },
  right: {
    margin: '0',
    fontSize: '14px',
    float: 'right',
    padding: '15px',
  },
  footer: {
    bottom: '0',
    padding: '15px 0',
    zIndex: 4,
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.right}>
          &copy;{moment().format('YYYY')}
          <a
            href="https://dtahoa.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            dtahoa
          </a>
        </p>
      </div>
    </footer>
  );
}

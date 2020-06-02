import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "sticky",
    color: "black"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Link to="/">
            <Typography component="h1" gutterBottom>
              WEATHER APP
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

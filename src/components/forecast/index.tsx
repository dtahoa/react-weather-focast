import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import dayjs from "dayjs";
import {icons} from "../../constants";

const useStyles = makeStyles(theme =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
      alignContent: "center",
      justifyContent: 'center',
      textAlign: "center"
    },
    cardGrid: {
      justifyContent: 'center',
      textAlign: "center",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    cardContent: {
      flexGrow: 1,
    },
    wi: {
      color: "#673ab7"
    },
    temp: {
      alignContent: "center",
      textAlign: "center"
    }
  }),
);
const Forecast: React.FC<any> = (props) => {
  const classes = useStyles();
  const prefix = "wi wi-";
  const { forecast } = props;
  const result = forecast.map((item: any, index: number) => {
    const icon = prefix + icons[item.icon_id].icon;
    
    return (
      <Grid item key={index} xs={12} sm={6} md={2}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle1" component="h3" align="center">
              {dayjs(item.dt_txt).format("dddd")}
            </Typography>
            <div className={classes.icon}>
              <IconButton disabled={true} aria-label="forecast icon">
                <span
                  className={`${classes.wi} ${icon}`}
                  style={{ fontSize: "24px" }}
                ></span>
              </IconButton>
            </div>
            <div className={classes.temp}>
              <Typography variant="body2" component="span" color="textPrimary" align="center">
                {Math.round(item.min)}&deg; /{" "}
              </Typography>
              <Typography variant="body2" component="span" color="textSecondary" align="center">
                {Math.round(item.max)}&deg;
              </Typography> 
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2} justify="center" alignContent="center">
        {result}
      </Grid>
    </Container>
  );
}

export default Forecast;
import React, { useEffect, useState } from "react";
import { CircularProgress, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import useDebounce from "../../hooks";

const useStyles = makeStyles(theme => ({
  error: {
    color: "red",
    padding: "10px"
  },
  search: {
    marginTop: "10px"
  }
}));

export default function WeatherSearch(props: any) {
  const classes = useStyles();
  const { onCityChange, error } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const hasError = error ? true : false;

  const handleSearch = (event: any) => {
    setSearching(true);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      onCityChange(debouncedSearchTerm);
      setSearching(false);
    }
  }, [onCityChange, debouncedSearchTerm, isSearching]);

  return (
    <div className={classes.search}>
      <Grid container alignItems="flex-start">
        <Grid item md={12} style={{ textAlign: "left" }}>
          <FormControl>
            <InputLabel htmlFor="search-city">Enter city name</InputLabel>
            <Input
              id="search-city"
              role="search"
              type="text"
              error={hasError}
              onChange={handleSearch}
              endAdornment={
                isSearching ? (
                  <InputAdornment position="end">
                    <CircularProgress size={20} />
                  </InputAdornment>
                ) : (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>)
              }
            />
            {error && (
              <Typography className={classes.error}>{error}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

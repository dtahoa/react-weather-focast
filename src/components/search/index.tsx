import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import useDebounce from '../../hooks';

const useStyles = makeStyles((theme) => ({
  error: {
    color: 'red',
    padding: '10px',
  },
  search: {
    marginTop: '10px',
  },
}));

interface WeatherSearchProps {
  onCityChange: (value: string) => void;
  error: boolean | undefined | null;
}

export default function WeatherSearch(props: WeatherSearchProps) {
  const classes = useStyles();
  const { onCityChange, error } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const hasError = error || false;

  // eslint-disable-next-line
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
    <Grid item md={12} style={{ textAlign: 'left' }}>
      <FormControl>
        <InputLabel htmlFor="search-city">Enter city name</InputLabel>
        <Input
          id="search-city"
          role="search"
          type="text"
          error={hasError}
          onChange={handleSearch}
          autoFocus
          endAdornment={
            isSearching ? (
              <InputAdornment position="end">
                <CircularProgress size={20} />
              </InputAdornment>
            ) : (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
          }
        />
        {error && <Typography className={classes.error}>{error}</Typography>}
      </FormControl>
    </Grid>
  );
}

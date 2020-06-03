import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WeatherSearch from './index';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../hooks', () => {
  return jest.fn(searchCity => searchCity);
});


describe('<WeatherSearch />', () => {
  let testProps = {} as any;
  beforeEach(() => {
    testProps = {
      city: 'Eldoret',
      onCityChange: () => { },
      error: null,
    };
  });

  test('renders a search input where one can type in a city', async () => {
    const mockOnCityChange = jest.fn();
    render(
      <WeatherSearch
        onCityChange={mockOnCityChange}
        error={testProps.error}
      />
    );

    await screen.findByRole('search');

    expect(screen.getByRole('search')).toBeInTheDocument();

    const searchInput = screen.getByLabelText('Enter city name');

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Berlin' } });

    await screen.findByLabelText('Enter city name');

    expect(mockOnCityChange).toHaveBeenCalledTimes(2);
    expect(mockOnCityChange).toHaveBeenCalledWith('Berlin');
  });
});

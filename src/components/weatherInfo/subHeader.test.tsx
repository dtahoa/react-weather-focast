import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubHeader from './subHeader';
import { mockCurrentWeather } from '../../__mocks__/Weather.mock';

import { WeatherFormated } from '../../types';

describe('<SubHeader />', () => {
  let testProps: { currentWeather: WeatherFormated; };
  beforeEach(() => {
    testProps = {
      currentWeather: mockCurrentWeather,
    };
  });

  test('renders without crashing', () => {
    const { container } = render(
      <SubHeader date={testProps.currentWeather.date} />
    );
    expect(container).toBeDefined();
  });

  test('renders the date, time of the day of weather', () => {
    render(<SubHeader date={testProps.currentWeather.date} />);

    expect(screen.getByText('Wed, 2:36PM')).toBeInTheDocument();
  });
});

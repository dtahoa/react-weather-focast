import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';

describe('<Header />', () => {
  test('Header renders without crashing', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(container).toBeDefined();
  });

  test('Header renders with the app logo and text', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText('Forecast App')).toBeInTheDocument();
  });
});

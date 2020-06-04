import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppLayout from './app';

describe('<App />', () => {
  test('App renders without crashing', () => {
    const { container } = render(
      <Router>
        <AppLayout />
      </Router>
    );

    expect(container).toBeDefined();
  });
});

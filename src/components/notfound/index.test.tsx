import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageNotFound from './index';

describe('<PageNotFound />', () => {
  test('PageNotFound renders without crashing', () => {
    const { container } = render(<PageNotFound />);

    expect(container).toBeDefined();
  });

  test('PageNotFound renders with description', () => {
    render(<PageNotFound />);

    expect(screen.getByText('Page not found :(')).toBeInTheDocument();
    expect(
      screen
        .getByText('Maybe the page you are looking for has been removed, or you typed in the wrong URL'))
      .toBeInTheDocument();
  });
});

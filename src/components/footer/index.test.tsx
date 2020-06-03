import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

describe('<Footer />', () => {
  test('Footer renders without crashing', () => {
    const { container } = render(<Footer />);

    expect(container).toBeDefined();
  });

  test('Footer renders with the bottom text line', () => {
    render(<Footer />);

    expect(screen.getByText('dtahoa')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders the content correctly', () => {
  render(<Text content="Hello, world!" />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeTruthy();  // Checks if the element exists and is not null
});

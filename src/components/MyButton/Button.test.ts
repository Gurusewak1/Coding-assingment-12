// @ts-ignore
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button'; // Ensure correct import of Button component

describe('Button component', () => {
  test('renders Button with disabled state', () => {
    render(<Button label="Click me" disabled={true} />); // Render Button with disabled prop

    const button = screen.getByRole('button', { name: /click me/i }); // Find button element

    expect(button).toBeDisabled(); // Assert button is disabled
  });
});

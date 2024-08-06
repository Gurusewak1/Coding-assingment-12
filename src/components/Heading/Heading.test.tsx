import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading';
import React from 'react';

describe('Heading Component', () => {
  it('should render with the correct text and level', () => {
    render(<Heading level={1}>Main Heading</Heading>);
    
    const headingElement = screen.getByText('Main Heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });

  it('should render with the correct size based on level', () => {
    render(<Heading level={2}>Sub Heading</Heading>);
    
    const headingElement = screen.getByText('Sub Heading');
    expect(headingElement).toHaveStyle('font-size: 1.75em'); 
  });
});

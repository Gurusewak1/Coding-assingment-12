import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';
import React from 'react';

describe('Label Component', () => {
  it('renders correctly with custom props', () => {
    const { getByText } = render(
      <Label
        text="Custom Label"
        disabled={true}
        backgroundColor="grey"
        color="black"
        fontSize="18px"
        fontWeight="bold"
        visible={true}
      />
    );

    // Find the label element
    const labelElement = getByText('Custom Label');
    
    // Assertions
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle('background-color: grey');
    expect(labelElement).toHaveStyle('font-size: 18px');
    expect(labelElement).toHaveStyle('font-weight: bold');
    expect(labelElement).toHaveStyle('opacity: 0.6');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});

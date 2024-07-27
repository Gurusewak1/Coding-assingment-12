import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroImage from './Hero-Image';

test('renders HeroImage with given props', () => {
  render(
    <HeroImage
      src="/path/to/hero-image.jpg"
      alt="Hero Image"
      width="100px"
      height="100px"
      backgroundColor="blue"
      visible={true}
      disabled={false}
    />
  );

  const imgElement = screen.getByAltText('Hero Image');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', '/path/to/hero-image.jpg');
  expect(imgElement).toHaveStyle('width: 100px');
  expect(imgElement).toHaveStyle('height: 100px');
  expect(imgElement.parentElement).toHaveStyle('background-color: blue');
  expect(imgElement.parentElement).not.toHaveStyle('opacity: 0.5');
});

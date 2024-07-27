import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { Img } from './Image';

test('should apply src, alt, width, and background color to the image and its wrapper', () => {
  // Render the Img component with specific props
  render(
    <Img
      src="https://via.placeholder.com/150"
      alt="Placeholder Image"
      width="150px"
      height="150px"
      backgroundColor="lightblue"
    />
  );

  // Get the image element and its wrapper
  const imgElement = screen.getByAltText('Placeholder Image');
  const wrapperElement = imgElement.parentElement;

  // Check the image element for src and alt attributes
  expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  expect(imgElement).toHaveAttribute('alt', 'Placeholder Image');

  // Check if the wrapper has the correct width, height, and background color
  if (wrapperElement) {
    expect(wrapperElement).toHaveStyle('width: 150px');
    expect(wrapperElement).toHaveStyle('height: 150px');
    expect(wrapperElement).toHaveStyle('background-color: lightblue');
  } else {
    throw new Error('Wrapper element is not found');
  }
});

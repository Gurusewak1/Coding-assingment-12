import { render, screen } from '@testing-library/react';
import { Img } from './Image'; // Ensure the path is correct
import '@testing-library/jest-dom/extend-expect';


describe('Img Component', () => {
  test('renders primary image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={false} />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeInTheDocument(); // Ensure the image is in the document
  });

  test('does not render image when visible is false', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={false} />);
    const imgElement = screen.queryByAltText('Placeholder Image');
    expect(imgElement).toBeNull(); // Ensure the image is not rendered
  });

  test('renders image with correct styles when disabled', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={true} backgroundColor="gray" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    const parentElement = imgElement.parentElement;

    // Check if styles are applied correctly
    expect(parentElement).toHaveStyle('opacity: 0.5');
    expect(parentElement).toHaveStyle('cursor: not-allowed');
    expect(parentElement).toHaveStyle('background-color: gray');
  });

  test('renders image with default background color when not specified', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={false} />);
    const imgElement = screen.getByAltText('Placeholder Image');
    const parentElement = imgElement.parentElement;

    // Check if default background color is applied
    expect(parentElement).toHaveStyle('background-color: transparent');
  });

  test('renders large image', () => {
    render(<Img src="https://via.placeholder.com/600" alt="Large Placeholder Image" visible={true} disabled={false} />);
    const imgElement = screen.getByAltText('Large Placeholder Image');
    expect(imgElement).toBeInTheDocument(); // Ensure the large image is in the document
  });
});

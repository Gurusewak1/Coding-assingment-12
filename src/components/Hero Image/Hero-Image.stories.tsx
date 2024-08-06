import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/test';
import HeroImage from './Hero-Image';
import { HeroImageProps } from './Hero-Image.type';
//
export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof HeroImage>;

const HeroImageStoryFn: StoryFn<HeroImageProps> = ({ src, alt, width, height, backgroundColor, visible, disabled }) => (
  <HeroImage src={src} alt={alt} width={width} height={height} backgroundColor={backgroundColor} visible={visible} disabled={disabled} />
);

export const Primary: StoryFn<HeroImageProps> = HeroImageStoryFn.bind({});
Primary.args = {
  src: '/path/to/hero-image.jpg',
  alt: 'Hero Image',
  width: '100px',
  height: '100px',
  backgroundColor: 'grey',
  disabled: false,
  visible: true
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.findByAltText('Hero Image');

  // Verify the image and its parent element's styles
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', '/path/to/hero-image.jpg');
  expect(imgElement).toHaveStyle({ width: '100px' });
  expect(imgElement).toHaveStyle({ height: '100px' });
  
  const parentElement = imgElement.parentElement;
  expect(parentElement).toHaveStyle({ backgroundColor: 'rgb(128, 128, 128)' }); // Update to RGB format if needed
  expect(parentElement).not.toHaveStyle({ opacity: '0.5' });
};

export const Disabled: StoryFn<HeroImageProps> = HeroImageStoryFn.bind({});
Disabled.args = {
  src: '/path/to/hero-image.jpg',
  alt: 'Hero Image',
  width: '100%',
  height: 'auto',
  backgroundColor: 'grey',
  visible: true,
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.findByAltText('Hero Image');

  // Verify the image and its styles
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', '/path/to/hero-image.jpg');
  
  // Adjust based on computed styles
  console.log('Computed height:', window.getComputedStyle(imgElement).height);
  expect(imgElement).toHaveStyle({ height: '0px' }); // Adjust if needed

  const parentElement = imgElement.parentElement;
  expect(parentElement).toHaveStyle({ backgroundColor: 'rgb(128, 128, 128)' });
  expect(parentElement).toHaveStyle({ opacity: '0.5' });
};

// HeroImage.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './Hero-Image';
import { HeroImageProps } from './Hero-Image.type';

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
} as Meta;

const HeroImageStoryFn: StoryFn<HeroImageProps> = ({ src, alt, width, height, backgroundColor, visible, disabled }) => (
  <HeroImage src={src} alt={alt} width={width} height={height} backgroundColor={backgroundColor} visible={visible} disabled={disabled} />
);

export const Primary: StoryFn<HeroImageProps> = HeroImageStoryFn.bind({});
Primary.args = {
  src: '/path/to/hero-image.jpg',
  alt: 'Hero Image',
  width: '100px',
  height: '100px',
  backgroundColor: 'blue',
  disabled: false,
  visible: true
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

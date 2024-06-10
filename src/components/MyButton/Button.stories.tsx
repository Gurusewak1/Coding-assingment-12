import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.type';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' },
    visible: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Define a Default story for the Button component
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  disabled: false,
  backgroundColor: '#007bff',
  hoverColor: '#0056b3',
  visible: true,
  
};

// Define a Disabled story for the Button component
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Click me',
  disabled: true,
  backgroundColor: '#cccccc',
  hoverColor: '#aaaaaa',
  visible: true,
  
};

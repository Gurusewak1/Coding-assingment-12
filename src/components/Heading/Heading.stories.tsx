import { StoryFn, Meta } from '@storybook/react';
import Heading from './Heading';
import { HeadingProps } from './Heading.type';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';


export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    text: { control: 'text' },
    level: { control: 'number', min: 1, max: 6 },
    color: { control: 'color' },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    align: {
      control: 'select',
      options: ['left', 'center', 'right']
    }
  },
} as Meta<HeadingProps>;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Heading 1',
  level: 1,
  color: '#000',
  bold: false,
  italic: false,
  backgroundColor: 'transparent',
  align: 'left'
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Bold Heading 2',
  level: 2,
  color: '#000',
  bold: true,
  italic: false,
  backgroundColor: 'transparent',
  align: 'center'
};

export const Centered = Template.bind({});
Centered.args = {
  text: 'Centered Heading 3',
  level: 3,
  color: '#007bff',
  bold: false,
  italic: false,
  backgroundColor: 'transparent',
  align: 'center'
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  text: 'Right-Aligned Heading 4',
  level: 4,
  color: '#ff5733',
  bold: false,
  italic: false,
  backgroundColor: 'transparent',
  align: 'right'
};

// Play Functions for Storybook

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Heading 1');
  // Interactions or assertions
  await userEvent.hover(headingElement);
  await expect(headingElement).toHaveStyle('color: #000');
};

Bold.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Bold Heading 2');
  
  // Interactions or assertions
  await userEvent.hover(headingElement);
  
  // Fetch the computed style
  const computedStyle = window.getComputedStyle(headingElement);
  
  // Assert the font-weight value
  await expect(computedStyle.fontWeight).toBe('700'); // Numeric value for 'bold'
};


Centered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Centered Heading 3');
  // Interactions or assertions
  await userEvent.hover(headingElement);
  await expect(headingElement).toHaveStyle('text-align: center');
};

RightAligned.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Right-Aligned Heading 4');
  // Interactions or assertions
  await userEvent.hover(headingElement);
  await expect(headingElement).toHaveStyle('text-align: right');
};

// Additional Play Functions

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  text: 'Heading with Background Color',
  level: 1,
  color: '#000',
  bold: false,
  italic: false,
  backgroundColor: '#f0f0f0',
  align: 'left'
};

CustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Heading with Background Color');
  // Interactions or assertions
  await expect(headingElement).toHaveStyle('background-color: #f0f0f0');
};

export const ItalicText = Template.bind({});
ItalicText.args = {
  text: 'Italic Heading',
  level: 1,
  color: '#000',
  bold: false,
  italic: true,
  backgroundColor: 'transparent',
  align: 'left'
};

ItalicText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const headingElement = await canvas.findByText('Italic Heading');
  // Interactions or assertions
  await expect(headingElement).toHaveStyle('font-style: italic');
};

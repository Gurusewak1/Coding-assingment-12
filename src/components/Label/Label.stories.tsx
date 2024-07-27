import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Label',
  disabled: false,
  visible: true,
  backgroundColor: '#007BFF',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'normal',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const labelElement = canvas.getByText('Primary Label');

  // Verify label is in the document
  await expect(labelElement).toBeInTheDocument();

  // Verify label's background color (hex to RGB conversion)
  await expect(labelElement).toHaveStyle({ 'background-color': 'rgb(0, 123, 255)' });

  // Verify label's text color
  await expect(labelElement).toHaveStyle({ color: 'rgb(255, 255, 255)' });
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
  visible: true,
  backgroundColor: 'grey',
  color: 'black',
  fontSize: '16px',
  fontWeight: 'normal',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const labelElement = canvas.getByText('Disabled Label');

  // Verify label is in the document
  await expect(labelElement).toBeInTheDocument();

  // Verify label's text color when disabled
  await expect(labelElement).toHaveStyle({ color: 'rgb(136, 136, 136)' });

  // Verify label's background color when disabled
  await expect(labelElement).toHaveStyle({ 'background-color': 'rgb(128, 128, 128)' });

  // Verify label's opacity and cursor when disabled
  await expect(labelElement).toHaveStyle({ opacity: '0.6' });
  await expect(labelElement).toHaveStyle({ cursor: 'not-allowed' });
};

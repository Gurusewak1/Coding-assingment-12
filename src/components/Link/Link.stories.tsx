import { StoryFn, Meta } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.type';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    color: { control: 'color' },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta<LinkProps>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Link',
  href: 'https://example.com',
  color: '#007bff',
  bold: false,
  italic: false,
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Link',
  href: 'https://example.com',
  color: '#007bff',
  bold: false,
  italic: false,
  visible: true,
  disabled: true,
  backgroundColor: 'transparent',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: 'Custom Color Link',
  href: 'https://example.com',
  color: '#ff5733',
  bold: false,
  italic: false,
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

// Play Function for Default Link
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Default Link');
  await userEvent.hover(linkElement);
  await expect(linkElement).toHaveStyle('color: #007bff');
};

// Play Function for Disabled Link
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Disabled Link');
  await expect(linkElement).toHaveStyle('pointer-events: none');
  await expect(linkElement).toHaveStyle('opacity: 0.5');
};

// Play Function for Custom Color Link
CustomColor.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Custom Color Link');
  await expect(linkElement).toHaveStyle('color: #ff5733');
};

import { StoryFn, Meta } from '@storybook/react';
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
    text: 'Default Label',
    disabled: false,
    visible: true,
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'normal', 
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



import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
  onClick: () => alert('Button clicked!'),
};

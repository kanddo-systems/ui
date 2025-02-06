import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { RoundedSize } from '@kanddo-ui/core';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text or elements displayed inside the button.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function that handles the button click event.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled.',
    },
    rounded: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Defines the border radius of the button.',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Click Me',
  rounded: 'medium' as RoundedSize,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Disabled Button',
  rounded: 'medium' as RoundedSize,
  disabled: true,
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  children: 'Rounded Button',
  rounded: 'medium' as RoundedSize,
};

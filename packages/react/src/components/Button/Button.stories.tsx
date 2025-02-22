import React from 'react';
import { StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { RoundedSize } from '@kanddo-ui/core';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  }
};

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
  rounded: 'large' as RoundedSize,
};

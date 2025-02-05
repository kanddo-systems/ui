import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component that can be styled with different colors, sizes, and border radii.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    colorVariant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      },
      description: 'Defines the color variant of the button.',
    },
    rounded: {
      control: {
        type: 'radio',
        options: ['none', 'small', 'medium', 'large', 'full'],
      },
      description: 'Defines the border radius of the button. Options include small, medium, large, and full (round).',
    },
    onClick: {
      action: 'clicked',
      description: 'Function triggered when the button is clicked.',
    },
    children: {
      control: 'text',
      description: 'Text displayed inside the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, making it unclickable.',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
  colorVariant: 'primary',
  rounded: 'medium',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary Button',
  colorVariant: 'primary',
  rounded: 'medium',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary Button',
  colorVariant: 'secondary',
  rounded: 'medium',
};

export const SmallRoundedButton = Template.bind({});
SmallRoundedButton.args = {
  children: 'Small Rounded Button',
  colorVariant: 'primary',
  rounded: 'small',
};

export const LargeRoundedButton = Template.bind({});
LargeRoundedButton.args = {
  children: 'Large Rounded Button',
  colorVariant: 'secondary',
  rounded: 'large',
};

export const FullRoundedButton = Template.bind({});
FullRoundedButton.args = {
  children: 'Full Rounded Button',
  colorVariant: 'primary',
  rounded: 'full',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Disabled Button',
  colorVariant: 'primary',
  rounded: 'medium',
  disabled: true,
};

export const CustomSizeButton = Template.bind({});
CustomSizeButton.args = {
  children: 'Custom Size Button',
  colorVariant: 'primary',
  rounded: 'medium',
  style: {
    padding: '20px 40px',
    fontSize: '18px',
  },
};

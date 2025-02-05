import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';
import { Colors, RoundedSize, InputSize } from '@kanddo-ui/core';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A flexible input field with support for validation, placeholders, sizes, and custom styles.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field.',
    },
    value: {
      control: 'text',
      description: 'Value displayed inside the input field.',
    },
    onChange: {
      action: 'changed',
      description: 'Function that handles the change in input value.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when the input is empty.',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Type of the input field.',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input field is required.',
    },
    errorMessage: {
      control: 'text',
      description: 'Message displayed when the input is invalid.',
    },
    colorVariant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      },
      description: 'Color variant for the input field.',
    },
    rounded: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large', 'full'],
      },
      description: 'Defines the border radius of the input field.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the input field.',
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: 'Default Input',
  value: '',
  onChange: (value) => console.log(value),
  placeholder: 'Type something...',
  colorVariant: 'primary' as Colors,
  rounded: 'medium' as RoundedSize,
  size: 'medium' as InputSize,
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  label: 'Small Input',
  value: '',
  onChange: (value) => console.log(value),
  placeholder: 'Small size input',
  colorVariant: 'primary' as Colors,
  rounded: 'small' as RoundedSize,
  size: 'small' as InputSize,
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  label: 'Large Input',
  value: '',
  onChange: (value) => console.log(value),
  placeholder: 'Large size input',
  colorVariant: 'secondary' as Colors,
  rounded: 'large' as RoundedSize,
  size: 'large' as InputSize,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: 'Email',
  value: '',
  onChange: (value) => console.log(value),
  placeholder: 'Enter a valid email',
  type: 'email',
  required: true,
  errorMessage: 'Invalid email address',
  colorVariant: 'danger' as Colors,
  rounded: 'medium' as RoundedSize,
  size: 'medium' as InputSize,
};

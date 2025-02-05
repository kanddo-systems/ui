import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    hint: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
      <Input {...args} value={value} onChange={setValue} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  value: '',
  placeholder: 'Enter your name',
  type: 'text',
  hint: '',
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Email',
  value: '',
  placeholder: 'Enter your email',
  type: 'email',
  hint: 'Please enter a valid email address',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  value: '',
  placeholder: '************',
  type: 'password',
  hint: '',
};
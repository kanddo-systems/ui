import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  }
};

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
  hint: 'This is a Hint!',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  value: '',
  placeholder: '************',
  type: 'password',
  hint: '',
};
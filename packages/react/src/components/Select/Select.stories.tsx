import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Select, SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  }
};

const Template: StoryFn<SelectProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
      <Select {...args} value={value} onChange={setValue} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Option',
  value: '',
  placeholder: 'Choose an option',
  hint: '',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Select Fruit',
  value: '',
  placeholder: 'Pick a fruit',
  hint: 'Select your favorite fruit',
  options: [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ],
};

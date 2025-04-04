import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { RadioBox, RadioBoxProps } from './RadioBox';

export default {
  title: 'Components/RadioBox',
  component: RadioBox,
  parameters: {
    layout: 'centered',
  }
};

const Template: StoryFn<RadioBoxProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
      <RadioBox {...args} value={value} onChange={setValue} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  value: '',
  hint: '',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Favorite Fruit',
  value: '',
  hint: 'Choose one of the options below',
  options: [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ],
};

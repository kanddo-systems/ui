import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    hint: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Agree to terms and conditions',
  checked: false,
  hint: '',
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Subscribe to newsletter',
  checked: false,
  hint: 'You can unsubscribe anytime.',
};

import React from 'react';
import { StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { RoundedSize } from '@kanddo-ui/core';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  }
};

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Badge',
  rounded: 'medium' as RoundedSize,
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  children: 'Rounded Badge',
  rounded: 'large' as RoundedSize,
};

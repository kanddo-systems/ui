import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: 'This is a simple card component created with styled-components.',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Card Title',
  children: 'You can customize the title and the content of the card by passing different props.',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: 'Custom Content Card',
  children: (
    <>
      <strong>Bold content:</strong> This is a more complex structure passed as children.
    </>
  ),
};

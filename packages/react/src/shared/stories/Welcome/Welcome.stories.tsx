import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Welcome, WelcomeProps } from "./Welcome";

export default {
  title: "Getting Started/Welcome",
  component: Welcome,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<WelcomeProps> = (args) => <Welcome {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Kanddo UI',
  description: 'Kanddo UI is a design system created to help you build consistent and reusable interfaces.',
};
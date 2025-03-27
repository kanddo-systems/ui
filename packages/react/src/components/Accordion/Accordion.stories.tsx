import React from "react";
import { StoryFn } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: 'centered',
  }
};

const Template: StoryFn<AccordionProps> = (args) => (
  <div style={{ minWidth: 400 }}>
    <Accordion {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: "Is it accessible?", content: "Content for section 1" },
    { id: 2, title: "Is it styled?", content: "Content for section 2" },
    { id: 3, title: "Is it animated?", content: "Content for section 3" },
  ],
};
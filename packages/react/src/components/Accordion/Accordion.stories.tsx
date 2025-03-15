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

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, title: "Section 1", content: "Content for section 1" },
    { id: 2, title: "Section 2", content: "Content for section 2" },
    { id: 3, title: "Section 3", content: "Content for section 3" },
  ],
};
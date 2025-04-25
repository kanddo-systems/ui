import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuProps,
  NavigationMenuItem,
} from "./NavigationMenu";

export default {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
};

const items: NavigationMenuItem[] = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Template: StoryFn<NavigationMenuProps> = (args) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const menuItems = args.items.map((item, idx) => ({
    ...item,
    active: idx === activeIdx,
    onClick: () => setActiveIdx(idx),
  }));

  return <NavigationMenu {...args} items={menuItems} />;
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  items,
  orientation: "horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  items,
  orientation: "vertical",
};

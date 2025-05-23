import React from "react";
import { StoryFn } from "@storybook/react";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Smartphones" },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Smartphones" },
  ],
  separator: "›",
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  items: [
    { label: "Home", onClick: () => alert("Home clicked") },
    { label: "Products", onClick: () => alert("Products clicked") },
    { label: "Electronics", onClick: () => alert("Electronics clicked") },
    { label: "Smartphones" },
  ],
};

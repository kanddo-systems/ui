import React from "react";
import { Component } from "./NavigationMenu.styles";
import { Typography } from "../Typography/Typography";

export interface NavigationMenuItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export interface NavigationMenuProps {
  items: NavigationMenuItem[];
  orientation?: "horizontal" | "vertical";
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  orientation = "horizontal",
}) => (
  <Component.Wrapper orientation={orientation}>
    {items.map((item, idx) => (
      <Component.Item
        key={item.href + idx}
        $active={item.active}
        onClick={item.onClick}
        as={item.onClick ? "button" : "a"}
        href={!item.onClick ? item.href : undefined}
        tabIndex={0}
      >
        <Typography variant="small">{item.label}</Typography>
      </Component.Item>
    ))}
  </Component.Wrapper>
);

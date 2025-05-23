import React from "react";
import { Component } from "./Breadcrumb.styles";
import { Typography } from "../Typography/Typography";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
}) => (
  <Component.Wrapper>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && (
          <Component.Separator>
            <Typography variant="small">{separator}</Typography>
          </Component.Separator>
        )}
        <Component.Item
          isLast={index === items.length - 1}
          onClick={item.onClick}
          href={item.href}
          as={item.href ? "a" : "span"}
        >
          <Typography variant="small">{item.label}</Typography>
        </Component.Item>
      </React.Fragment>
    ))}
  </Component.Wrapper>
);

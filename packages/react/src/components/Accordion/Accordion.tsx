import React, { useState, FC } from "react";
import { Component } from "./Accordion.styles";
import { Typography } from "../Typography/Typography";

interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Component.Wrapper>
      {items.map((item, index) => (
        <Component.Item key={index}>
          <Component.Header isOpen={openIndex === index} onClick={() => toggleAccordion(index)}>
            <Typography variant="default">{item.title}</Typography>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </Component.Header>
          <Component.Content isOpen={openIndex === index}>{item.content}</Component.Content>
        </Component.Item>
      ))}
    </Component.Wrapper>
  );
};

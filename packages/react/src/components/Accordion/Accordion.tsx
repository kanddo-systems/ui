import React, { useState, FC, memo, useCallback } from "react";
import { Component } from "./Accordion.styles";
import { Typography } from "../Typography/Typography";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = useCallback((id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  }, []);

  return (
    <Component.Wrapper>
      {items.map(({ id, title, content }) => (
        <MemoizedAccordionItem
          key={id}
          id={id}
          title={title}
          content={content}
          isOpen={openIndex === id}
          onToggle={toggleAccordion}
        />
      ))}
    </Component.Wrapper>
  );
};

interface AccordionItemProps extends AccordionItem {
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const AccordionItemComponent: FC<AccordionItemProps> = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <Component.Item>
      <Component.Header
        isOpen={isOpen}
        onClick={() => onToggle(id)}
        role="button"
        aria-expanded={isOpen}
      >
        <Typography variant="small">{title}</Typography>
      </Component.Header>
      <Component.Content isOpen={isOpen} aria-hidden={!isOpen}>
        {content}
      </Component.Content>
    </Component.Item>
  );
};

const MemoizedAccordionItem = memo(AccordionItemComponent);

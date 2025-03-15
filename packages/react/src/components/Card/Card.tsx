import React, { FC, memo } from 'react';
import { Component } from './Card.styles';
import { Typography } from '../Typography/Typography';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

const CardComponent: FC<CardProps> = ({ title, children }) => (
  <Component.Wrapper aria-labelledby={title}>
    <Typography variant="xlarge">{title}</Typography>
    <Component.ChildrenWrapper>
      <Typography variant="small">
        {children || 'No content available.'}
      </Typography>
    </Component.ChildrenWrapper>
  </Component.Wrapper>
);

export const Card = memo(CardComponent);

import React from 'react';
import { Component } from './Card.styles';
import { Typography } from '../Typography/Typography';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <Component.Wrapper>
    <Typography variant='xlarge'>{title}</Typography>
    <Component.ChildrenWrapper>
      <Typography variant='small'>{children}</Typography>
    </Component.ChildrenWrapper>
  </Component.Wrapper>
);

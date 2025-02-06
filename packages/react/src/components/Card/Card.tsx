import React from 'react';
import { Component } from './Card.styles';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <Component.Wrapper>
    <Component.Title>{title}</Component.Title>
    <Component.Content>{children}</Component.Content>
  </Component.Wrapper>
);

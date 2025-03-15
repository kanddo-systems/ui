import React, { FC, memo } from 'react';
import { RoundedSize } from '@kanddo-ui/core';
import { Component } from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  rounded?: RoundedSize;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  onClick,
  rounded = 'medium',
  disabled = false,
}) => {
  return (
    <Component
      rounded={rounded}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}
      role="button"
    >
      {children}
    </Component>
  );
};

export const Button = memo(ButtonComponent);

import React from 'react';
import { RoundedSize } from '@kanddo-ui/core';
import { Component } from './Badge.styles';

export interface BadgeProps {
    children: React.ReactNode;
    rounded?: RoundedSize;
    onClick?: () => void;
    disabled?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    onClick,
    rounded = 'medium',
    disabled = false
}) => {
    return (
        <Component rounded={rounded} onClick={disabled ? undefined : onClick} disabled={disabled}>
            {children}
        </Component>
    );
};

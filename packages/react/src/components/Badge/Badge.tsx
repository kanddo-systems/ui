import React from 'react';
import { RoundedSize } from '@kanddo-ui/core';
import { Component } from './Badge.styles';

export interface BadgeProps {
    children: React.ReactNode;
    rounded?: RoundedSize;
    onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    onClick,
    rounded = 'medium',
}) => {
    return (
        <Component rounded={rounded} onClick={onClick}>
            {children}
        </Component>
    );
};

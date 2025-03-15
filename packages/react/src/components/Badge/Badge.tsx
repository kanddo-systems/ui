import React, { FC, memo, useMemo } from 'react';
import { RoundedSize } from '@kanddo-ui/core';
import { Component } from './Badge.styles';

export interface BadgeProps {
    children: React.ReactNode;
    rounded?: RoundedSize;
}

const BadgeComponent: FC<BadgeProps> = ({ children, rounded = 'medium' }) => {
    const memoRounded = useMemo(() => rounded, [rounded]);

    return (
        <Component rounded={memoRounded}>
            {children}
        </Component>
    );
};

export const Badge = memo(BadgeComponent);

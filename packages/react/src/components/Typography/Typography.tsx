import React from 'react';
import { Component } from './Typography.styles';
import { CombinedSizes } from '@kanddo-ui/core/dist/tokens/typography';

export interface TypographyProps {
    variant: CombinedSizes;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    return <Component variant={variant}>{children}</Component>;
};

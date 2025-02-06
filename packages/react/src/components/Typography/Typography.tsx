import React from 'react';
import { Component, typographyStyles } from './Typography.styles';

interface TypographyProps {
    variant: keyof typeof typographyStyles;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    return <Component variant={variant}>{children}</Component>;
};


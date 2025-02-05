import React from 'react';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography, RoundedSize } from '@kanddo-ui/core';
import '@kanddo-ui/core/src/styles/css/fonts.css';

export interface ButtonProps {
    rounded?: RoundedSize;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ rounded = 'medium', children, onClick, disabled = false }) => {
    const buttonStyles = {
        padding: spacing.small,
        fontSize: typography.fontSize,
        fontFamily: typography.fontFamily,
        backgroundColor: colors.primary[500],
        color: colors.text,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: transitions.color,
        opacity: disabled ? 0.6 : 1,
        borderRadius: borderRadius(sizes[rounded]),
        border: 'none',
    };

    return (
        <button style={buttonStyles} onClick={disabled ? undefined : onClick} disabled={disabled}>
            {children}
        </button>
    );
};

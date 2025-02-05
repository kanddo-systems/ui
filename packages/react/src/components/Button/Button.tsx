import React from 'react';
import { borderRadius, Colors, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography, RoundedSize } from '@kanddo-ui/core';
import '@kanddo-ui/core/src/styles/css/fonts.css';

export interface ButtonProps {
    colorVariant?: Colors;
    rounded?: RoundedSize;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ colorVariant = 'primary', rounded = 'medium', children, onClick, disabled = false }) => {
    const buttonStyles = {
        padding: spacing.medium,
        fontSize: typography.fontSize,
        fontFamily: typography.fontFamily,
        backgroundColor: colors[colorVariant],
        color: colors.text,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: transitions.color,
        opacity: disabled ? 0.6 : 1,
        borderRadius: borderRadius(rounded),
        border: 'none',
    };

    return (
        <button style={buttonStyles} onClick={disabled ? undefined : onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

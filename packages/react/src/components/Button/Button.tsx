import React from 'react';
import { borderRadius } from '@kanddo-ui/core';
import { colors, spacing, typography, RoundedSize } from '@kanddo-ui/core';
import '@kanddo-ui/core/src/styles/css/fonts.css';

export interface ButtonProps {
    primary?: boolean;
    rounded?: RoundedSize;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary = true, rounded = 'medium', children, onClick }) => {
    const buttonStyles = {
        padding: spacing.medium,
        fontSize: typography.fontSize,
        fontFamily: typography.fontFamily,
        backgroundColor: primary ? colors.primary : colors.secondary,
        color: '#fff',
        borderRadius: borderRadius(rounded),
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <button style={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

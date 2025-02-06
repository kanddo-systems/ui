import React from 'react';
import { RoundedSize } from '@kanddo-ui/core';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
    rounded?: RoundedSize;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ rounded = 'medium', children, onClick, disabled = false }) => {
    return (
        <StyledButton rounded={rounded} onClick={disabled ? undefined : onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

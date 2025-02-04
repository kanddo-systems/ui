import React from 'react';
import { theme } from '@kanddo-ui/core';

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick} style={{ background: theme.colors.primary }}>{label}</button>;
};


import React from 'react';
import { Component } from './Input.styles';
import { Typography } from '../Typography/Typography';

export interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    hint?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    hint,
}) => (
    <Component.Wrapper>
        <Typography variant='small'>{label}</Typography>
        <Component.Field
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
        {hint && <Typography variant='xxsmall'>{hint}</Typography>}
    </Component.Wrapper>
);

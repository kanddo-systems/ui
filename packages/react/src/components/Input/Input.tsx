import React from 'react';
import { Component } from './Input.styles';

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
        <Component.Label>{label}</Component.Label>
        <Component.Field
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
        {hint && <Component.Hint>{hint}</Component.Hint>}
    </Component.Wrapper>
);

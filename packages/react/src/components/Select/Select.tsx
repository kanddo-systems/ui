import React from 'react';
import { Component } from './Select.styles';
import { Typography } from '../Typography/Typography';

export interface SelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
    hint?: string;
}

export const Select: React.FC<SelectProps> = ({
    label,
    value,
    onChange,
    options,
    placeholder = '',
    hint,
}) => (
    <Component.Wrapper>
        <Typography variant='small'>{label}</Typography>
        <Component.Field
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {placeholder && <Component.Option value='' disabled>{placeholder}</Component.Option>}
            {options.map((option) => (
                <Component.Option key={option.value} value={option.value}>
                    {option.label}
                </Component.Option>
            ))}
        </Component.Field>
        {hint && <Typography variant='xxsmall'>{hint}</Typography>}
    </Component.Wrapper>
);

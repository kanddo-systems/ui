import React from 'react';
import { Hint, InputWrapper, Label, StyledInput } from './Input.styles';

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
    <InputWrapper>
        <Label>{label}</Label>
        <StyledInput
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
        {hint && <Hint>{hint}</Hint>}
    </InputWrapper>
);

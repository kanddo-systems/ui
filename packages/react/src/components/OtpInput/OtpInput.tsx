import React, { useState, useRef } from 'react';
import { Component } from './OtpInput.styles';
import { Typography } from '../Typography/Typography';

export interface OtpInputProps {
    label: string;
    length?: number;
    onChange: (value: string) => void;
    hint?: string;
}

export const OtpInput: React.FC<OtpInputProps> = ({
    label,
    length = 6,
    onChange,
    hint,
}) => {
    const [values, setValues] = useState(Array(length).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        if (newValues.every((v) => v !== '')) {
            onChange(newValues.join(''));
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <Component.Wrapper>
            <Typography variant='small'>{label}</Typography>
            <Component.InputContainer>
                {values.map((val, index) => (
                    <Component.Field
                        key={index}
                        ref={(el) => {
                            inputsRef.current[index] = el;
                        }}
                        type='text'
                        value={val}
                        maxLength={1}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                ))}
            </Component.InputContainer>
            {hint && <Typography variant='xxsmall'>{hint}</Typography>}
        </Component.Wrapper>
    );
};

import React from 'react';
import { Typography } from '../Typography/Typography';
import { Component } from './Checkbox.styles';

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    hint?: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    onChange,
    hint,
}) => (
    <Component.Wrapper>
        <Component.Label>
            <Component.Box
                type='checkbox'
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <Typography variant='default'>{label}</Typography>
        </Component.Label>
        {hint && <Component.Hint><Typography variant='bodyExtraSmall'>{hint}</Typography></Component.Hint>}
    </Component.Wrapper>
);


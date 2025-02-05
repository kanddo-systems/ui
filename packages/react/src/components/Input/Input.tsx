import React from 'react';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';
import '@kanddo-ui/core/src/styles/css/fonts.css';

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
}) => {
    const inputStyles = {
        padding: spacing.small,
        fontSize: typography.fontSizeSmall,
        fontFamily: typography.fontFamily,
        border: `1px solid ${colors.primary[400]}`,
        borderRadius: borderRadius(sizes.small),
        transition: transitions.color,
        width: '100%',
    };

    const labelStyles = {
        fontSize: typography.fontSizeSmall,
        marginBottom: spacing.small,
        display: 'block',
        fontFamily: typography.fontFamily,
    };

    const errorStyles = {
        color: colors.primary[700],
        fontSize: typography.fontSizeSmall,
        marginTop: spacing.xsmall,
        fontFamily: typography.fontFamily,
    };

    return (
        <div style={{ marginBottom: spacing.large, width:"100%" }}>
            <label style={labelStyles}>
                {label}
            </label>
            <input
                style={inputStyles}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {hint && <span style={errorStyles}>{hint}</span>}
        </div>
    );
};
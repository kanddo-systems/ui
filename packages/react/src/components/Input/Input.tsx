import React, { useState } from 'react';
import { borderRadius, Colors, transitions, InputSize } from '@kanddo-ui/core';
import { colors, spacing, typography, RoundedSize } from '@kanddo-ui/core';
import '@kanddo-ui/core/src/styles/css/fonts.css';

export interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
    errorMessage?: string;
    colorVariant?: Colors;
    rounded?: RoundedSize;
    size?: InputSize;
}

const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    required = false,
    errorMessage,
    colorVariant = 'primary',
    rounded = 'medium',
    size = 'medium',
}) => {
    const [isTouched, setIsTouched] = useState(false);

    const handleBlur = () => {
        setIsTouched(true);
    };

    const inputSizes = {
        small: {
            padding: spacing.small,
            fontSize: typography.fontSizeSmall,
            width: '100%',
        },
        medium: {
            padding: spacing.medium,
            fontSize: typography.fontSize,
            width: '100%',
        },
        large: {
            padding: spacing.medium,
            fontSize: typography.fontSizeLarge,
            width: '100%',
        },
    };

    const { padding, fontSize, width } = inputSizes[size];

    const inputStyles = {
        padding,
        fontSize,
        fontFamily: typography.fontFamily,
        backgroundColor: '#f9f9f9',
        border: `1px solid ${isTouched && errorMessage ? colors.danger : colors[colorVariant]}`, // Borda condicional
        borderRadius: borderRadius(rounded),
        outline: 'none',
        transition: transitions.color,
        width: width || '100%',
        boxSizing: 'border-box' as 'border-box',
    };

    const labelStyles = {
        fontSize: typography.fontSize,
        marginBottom: spacing.small,
        display: 'block',
        fontFamily: typography.fontFamily,
    };

    const errorStyles = {
        color: colors.danger,
        fontSize: typography.fontFamily,
        marginTop: spacing.xsmall,
        fontFamily: typography.fontFamily,
    };

    return (
        <div style={{ marginBottom: spacing.large }}>
            <label style={labelStyles}>
                {label} {required && '*'}
            </label>
            <input
                style={inputStyles}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                onBlur={handleBlur}
            />
            {isTouched && errorMessage && <span style={errorStyles}>{errorMessage}</span>}
        </div>
    );
};

export default Input;

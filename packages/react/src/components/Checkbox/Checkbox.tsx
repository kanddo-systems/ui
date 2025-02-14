import React from 'react';
import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';
import { Typography } from '../Typography/Typography';

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
        {hint && <Component.Hint><Typography variant='bodySmall'>{hint}</Typography></Component.Hint>}
    </Component.Wrapper>
);

const Component = {
    Wrapper: styled.div`
        font-family: ${typography.fontFamily};
        margin-bottom: ${spacing.large};
        color: ${colors.text.default};
        width: 100%;
        display: flex;
        flex-direction: column;
    `,
    Label: styled.label`
        display: flex;
        align-items: center;
        gap: ${spacing.small};
        cursor: pointer;
    `,
    Box: styled.input`
        width: ${sizes.medium};
        height: ${sizes.medium};
        border: 1px solid ${colors.background.muted};
        border-radius: ${borderRadius(sizes.xsmall)};
        transition: ${transitions.color};
        display: flex;
        align-items: center;
        justify-content: center;
        accent-color: ${colors.background.default};

        &:checked {
            outline: 1px solid ${colors.primary[500]};
        }
    `,
    Hint: styled.div`
        display: flex;
        align-items: flex-start;
        width: 100%;
    `,
};
import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

export const Component = {
    Wrapper: styled.div`
        font-family: ${typography.fontFamily};
        margin-bottom: ${spacing.large};
        color: ${colors.text.default};
        width: 100%;
    `,
    Options: styled.div`
        margin-top: ${spacing.xsmall};
        display: flex;
        flex-direction: column;
        gap: ${spacing.xsmall};
    `,
    Label: styled.label`
        display: flex;
        align-items: center;
        gap: ${spacing.small};
        cursor: pointer;
        font-size: ${typography.sizes.small};
        transition: ${transitions.color};

        &:hover {
            color: ${colors.primary[700]};
        }
    `,
    Radio: styled.input`
        appearance: none;
        padding: ${spacing.xsmall};
        border: 1px solid black;
        border-radius: 50%;
        transition: ${transitions.color};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:checked {
            background-color: ${colors.primary[700]};
            border-color: ${colors.primary[700]};
        }
        &:checked::after {
            
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 1px ${colors.primary[400]};
        }
    `,
};

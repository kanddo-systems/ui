import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

export const Component = {
    Wrapper: styled.div`
        margin-bottom: ${spacing.large};
        width: 100%;
    `,
    Label: styled.label`
        font-size: ${typography.fontSizeSmall};
        margin-bottom: ${spacing.small};
        display: block;
        font-family: ${typography.fontFamily};
    `,
    Field: styled.input`
        padding: ${spacing.small};
        font-size: ${typography.fontSizeSmall};
        font-family: ${typography.fontFamily};
        border: 1px solid ${colors.primary[400]};
        border-radius: ${borderRadius(sizes.small)};
        transition: ${transitions.color};
        width: 100%;
        outline: none;

        &:focus {
            box-shadow: 0 0 0 2px ${colors.primary[500]};
        }
    `,
    Hint: styled.span`
        color: ${colors.primary[700]};
        font-size: ${typography.fontSizeSmall};
        margin-top: ${spacing.xsmall};
        font-family: ${typography.fontFamily};
    `,
};

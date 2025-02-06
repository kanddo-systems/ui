import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

export const Component = {
    Wrapper: styled.div`
        margin-bottom: ${spacing.large};
        width: 100%;
        color: ${colors.text.default}
    `,
    Label: styled.label`
        font-size: ${typography.sizes.small};
        margin-bottom: ${spacing.small};
        display: block;
        font-family: ${typography.fontFamily};
    `,
    Field: styled.input`
        padding: ${spacing.small};
        font-size: ${typography.sizes.small};
        font-family: ${typography.fontFamily};
        border: 1px solid ${colors.background.muted};
        border-radius: ${borderRadius(sizes.small)};
        transition: ${transitions.color};
        width: 100%;
        outline: none;

        &:focus {
            box-shadow: 0 0 0 1px ${colors.primary[400]};
        }
    `,
    Hint: styled.span`
        color: ${colors.primary[600]};
        font-size: ${typography.sizes.small};
        margin-top: ${spacing.xsmall};
        font-family: ${typography.fontFamily};
    `,
};

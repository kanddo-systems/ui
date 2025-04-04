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
    Field: styled.select`
        margin-top: ${spacing.xsmall};
        padding: ${spacing.small};
        font-size: ${typography.sizes.small};
        border: 1px solid ${colors.background.muted};
        border-radius: ${borderRadius('small')};
        transition: ${transitions.color};
        width: 100%;
        outline: none;
        background-color: ${colors.background.default};
        color: ${colors.text.default};

        &:focus {
            box-shadow: 0 0 0 1px ${colors.primary[700]};
        }
    `,
    Option: styled.option`
        padding: ${spacing.xsmall};
        background-color: ${colors.background.default};
        color: ${colors.text.default};

        &:hover {
            background-color: ${colors.primary[100]};
        }

        &:checked {
            background-color: ${colors.primary[200]};
        }
    `,
};

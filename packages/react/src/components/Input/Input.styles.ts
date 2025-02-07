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
    Field: styled.input`
        padding: ${spacing.small};
        font-size: ${typography.sizes.small};
        border: 1px solid ${colors.background.muted};
        border-radius: ${borderRadius(sizes.small)};
        transition: ${transitions.color};
        width: 100%;
        outline: none;
        &:focus {
            box-shadow: 0 0 0 1px ${colors.primary[400]};
        }
    `,
};

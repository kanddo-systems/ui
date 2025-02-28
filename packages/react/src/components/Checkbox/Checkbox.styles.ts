import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

export const Component = {
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
        border-radius: ${borderRadius('xsmall')};
        transition: ${transitions.color};
        display: flex;
        align-items: center;
        justify-content: center;

        &:checked {
            accent-color: ${colors.background.default};
        }
    `,
    Hint: styled.div`
        display: flex;
        align-items: flex-start;
        width: 100%;
    `,
};
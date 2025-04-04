import styled from 'styled-components';
import { borderRadius, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

export const Component = {
    Wrapper: styled.div`
        font-family: ${typography.fontFamily};
        margin-bottom: ${spacing.large};
        color: ${colors.text.default};
        width: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
    `,

    InputContainer: styled.div`
        display: flex;
        gap: ${spacing.small};
        margin: ${spacing.small} 0px;
    `,

    Field: styled.input`
        padding: ${spacing.small};
        font-size: ${typography.sizes.medium};
        border: 1px solid ${colors.background.muted};
        border-radius: ${borderRadius('small')};
        transition: ${transitions.color};
        width: 1.5rem;
        height: 2rem;
        text-align: center;
        outline: none;

        &:focus {
            box-shadow: 0 0 0 1px ${colors.primary[400]};
        }
    `,
};

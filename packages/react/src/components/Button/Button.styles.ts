import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

import { ButtonProps } from "./Button";

export const Component = styled.button<ButtonProps>`
    padding: ${spacing.small};
    font-size: ${typography.sizes.small};
    font-family: ${typography.fontFamily};
    background-color: ${colors.primary[500]};
    color: ${colors.text.inverted};
    transition: ${transitions.color};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    border-radius: ${({ rounded }) => borderRadius(rounded || 'medium')};
    border: none;
    width: 100%;

    &:hover {
        background-color: ${colors.primary[400]};
    }
`;
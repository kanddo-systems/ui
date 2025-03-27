import styled from 'styled-components';
import { borderRadius, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

import { ButtonProps } from "./Button";

export const Component = styled.button<ButtonProps>`
    padding: ${spacing.small} ${spacing.medium};
    font-size: ${typography.sizes.xsmall};
    font-family: ${typography.fontFamily};
    font-weight:${typography.weight.semiBold};
    background-color: ${colors.primary[900]};
    color: ${colors.text.inverted};
    transition: ${transitions.color};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    border-radius: ${({ rounded }) => borderRadius(rounded || 'medium')};
    border: none;
    width: 100%;
    line-height: 1rem;

    &:hover {
        background-color: ${colors.primary[700]};
    }
`;
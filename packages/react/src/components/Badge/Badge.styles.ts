import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

import { BadgeProps } from "./Badge";

export const Component = styled.span<BadgeProps>`
    padding: ${spacing.xsmall} ${spacing.small};
    font-size: ${typography.sizes.xsmall};
    font-weight:${typography.weight.semiBold};
    font-family: ${typography.fontFamily};
    background-color: ${colors.primary[800]};
    color: ${colors.text.inverted};
    transition: ${transitions.color};
    border-radius: ${({ rounded }) => borderRadius(rounded || 'medium')};
    border: none;
    width: 100%;
    cursor: text;

    &:hover {
        background-color: ${colors.primary[600]};
    }
`;
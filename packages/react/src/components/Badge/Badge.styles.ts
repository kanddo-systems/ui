import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

import { BadgeProps } from "./Badge";

export const Component = styled.button<BadgeProps>`
    padding: ${spacing.xsmall} ${spacing.small};
    font-size: ${typography.sizes.small};
    font-family: ${typography.fontFamily};
    background-color: ${colors.primary[500]};
    color: ${colors.text.inverted};
    transition: ${transitions.color};
    border-radius: ${({ rounded }) => borderRadius(sizes[rounded || 'medium'])};
    border: none;
    width: 100%;
    cursor: text;

    &:hover {
        background-color: ${colors.primary[400]};
    }
`;
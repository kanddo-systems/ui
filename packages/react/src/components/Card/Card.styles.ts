import { borderRadius, colors, shadows, sizes, spacing, typography } from '@kanddo-ui/core';
import styled from 'styled-components';

export const Component = {
    Wrapper: styled.div`
    font-family: ${typography.fontFamily};
    background-color: ${colors.background.default};
    border-radius: ${borderRadius(sizes.medium)};
    box-shadow: ${shadows.small};
    padding: ${spacing.medium};
    width: 300px;
  `,
    Title: styled.h2`
    font-size: ${typography.sizes.xLarge};
    margin-bottom: 8px;
  `,
    Content: styled.p`
    font-size: ${typography.sizes.small};
    color: ${colors.text.subtle};
  `,
};

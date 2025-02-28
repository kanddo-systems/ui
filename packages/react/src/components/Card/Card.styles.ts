import { borderRadius, colors, shadows, sizes, spacing, typography } from '@kanddo-ui/core';
import styled from 'styled-components';

export const Component = {
  Wrapper: styled.div`
    font-family: ${typography.fontFamily};
    background-color: ${colors.background.default};
    border-radius: ${borderRadius('medium')};
    box-shadow: ${shadows.small};
    padding: ${spacing.medium};
    width: 300px;
  `,
  ChildrenWrapper: styled.p`
    margin-top: ${spacing.medium};
  `,
};

import { borderRadius, colors, shadows, spacing, typography } from '@kanddo-ui/core';
import styled from 'styled-components';

export const Component = {
  Wrapper: styled.div`
    font-family: ${typography.fontFamily};
    background-color: ${colors.background.default};
    border-radius: ${borderRadius('medium')};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    padding: ${spacing.medium};
    width: 300px;
  `,
  ChildrenWrapper: styled.p`
    margin-top: ${spacing.medium};
  `,
};

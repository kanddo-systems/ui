import styled from 'styled-components';
import { colors, typography, borderRadius, spacing } from '@kanddo-ui/core';

export const Component = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: background-color 0.3s ease;
  `,
  
  Content: styled.div`
    background-color: ${colors.background.default};
    padding: ${spacing.medium};
    border-radius: ${borderRadius('small')};
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  `,
  
  Header: styled.div`
    font-size: ${typography.sizes.large};
    font-family: ${typography.fontFamily};
    font-weight: ${typography.weight.bold};
    margin-bottom: ${spacing.small};
  `,
  
  Body: styled.div`
    font-size: ${typography.sizes.medium};
    font-family: ${typography.fontFamily};
    margin-bottom: ${spacing.medium};
    color: ${colors.text.default};
  `,
  
  Footer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${spacing.small};
  `,
};

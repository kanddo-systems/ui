import { borderRadius, colors, sizes, spacing, transitions, typography } from '@kanddo-ui/core';
import styled from 'styled-components';

export const Component = {
  Wrapper: styled.div`
    font-family: ${typography.fontFamily};
    width: 100%;
    border: 1px solid ${colors.background.muted};
    border-radius: ${borderRadius('small')};
    overflow: hidden;
    background: ${colors.background.default};
  `,
  Item: styled.div`
    border-bottom: 1px solid ${colors.background.muted};
    &:last-child {
      border-bottom: none;
    }
  `,
  Header: styled.button<{ isOpen: boolean }>`
    width: 100%;
    padding: ${spacing.small};
    font-size: ${typography.sizes.small};
    border: none;
    text-align: left;
    background: ${({ isOpen }) => (isOpen ? colors.primary[900] : colors.background.default)};
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${borderRadius('xsmall')};
    transition: ${transitions.color}, background 0.2s ease-in-out;

    & > * {
      color: ${({ isOpen }) => (isOpen ? colors.text.inverted : colors.text.default)};
    }
  `,
  Content: styled.div<{ isOpen: boolean }>`
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow: hidden;
    padding: ${spacing.small};
    background: ${colors.background.default};
    font-size: ${typography.sizes.small};
    color: ${colors.text.default};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
    ${({ isOpen }) => (!isOpen ? "padding-top: 0; padding-bottom: 0;" : "")}
  `,
};
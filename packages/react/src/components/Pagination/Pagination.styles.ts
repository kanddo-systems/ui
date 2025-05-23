import styled, { css } from "styled-components";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  transitions,
} from "@kanddo-ui/core";

interface PageItemProps {
  isActive?: boolean;
  isEllipsis?: boolean;
}

export const Component = {
  Wrapper: styled.div`
    font-family: ${typography.fontFamily};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${spacing.medium} 0;
  `,
  PageList: styled.div`
    display: flex;
    align-items: center;
    margin: 0 ${spacing.small};
  `,
  PageItem: styled.button<PageItemProps>`
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${spacing.xsmall};
    border-radius: ${borderRadius("small")};
    border: 1px solid ${colors.background.muted};
    background: ${colors.background.default};
    cursor: pointer;
    transition: ${transitions.color};
    padding: 0 ${spacing.small};
    outline: none;

    &:hover {
      background: ${colors.background.muted};
    }

    ${(props) =>
      props.isActive &&
      css`
        background: ${colors.primary[700]};
        border-color: ${colors.primary[700]};

        & > * {
          color: ${colors.text.inverted};
        }
        &:hover {
          background: ${colors.primary[800]};
        }
      `}

    ${(props) =>
      props.isEllipsis &&
      css`
        border: none;
        cursor: default;

        &:hover {
          background: transparent;
        }
      `}
  `,
  Button: styled.button<{ disabled?: boolean }>`
    padding: ${spacing.xsmall} ${spacing.small};
    border-radius: ${borderRadius("small")};
    border: 1px solid ${colors.background.muted};
    background: ${colors.background.default};
    cursor: pointer;
    transition: ${transitions.color};
    outline: none;

    &:hover {
      background: ${colors.background.muted};
    }

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          background: ${colors.background.default};
        }
      `}
  `,
};

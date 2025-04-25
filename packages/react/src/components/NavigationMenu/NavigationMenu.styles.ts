import styled, { css } from "styled-components";
import { colors, spacing, typography } from "@kanddo-ui/core";

interface WrapperProps {
  orientation: "horizontal" | "vertical";
}

interface ItemProps {
  $active?: boolean;
}

export const Component = {
  Wrapper: styled.nav<WrapperProps>`
    display: flex;
    flex-direction: ${({ orientation }) =>
      orientation === "vertical" ? "column" : "row"};
    gap: ${spacing.large};
    width: 100%;
  `,
  Item: styled.a<ItemProps>`
    display: flex;
    align-items: center;
    padding: ${spacing.xsmall} ${spacing.small};
    font-family: ${typography.fontFamily};
    font-size: ${typography.sizes.small};
    color: ${({ $active }) =>
      $active ? colors.primary[700] : colors.text.default};
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s, color 0.2s;

    &:hover,
    &:focus {
      background: ${colors.background.muted};
      color: ${colors.primary[700]};
      outline: none;
    }

    ${({ $active }) =>
      $active &&
      css`
        font-weight: bold;
        background: ${colors.primary[50]};
      `}
  `,
};

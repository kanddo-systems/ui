import styled, { css } from "styled-components";
import { colors, spacing, typography, transitions } from "@kanddo-ui/core";

interface ItemProps {
  isLast: boolean;
  href?: string;
}

export const Component = {
  Wrapper: styled.nav`
    font-family: ${typography.fontFamily};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: ${spacing.medium};
    color: ${colors.text.default};
  `,
  Item: styled.span<ItemProps>`
    padding: ${spacing.xsmall} ${spacing.small};
    transition: ${transitions.color};
    cursor: ${(props) => (props.isLast || !props.href ? "default" : "pointer")};
    text-decoration: none;

    ${(props) =>
      !props.isLast &&
      props.href &&
      css`
        color: ${colors.primary[700]};

        &:hover {
          text-decoration: underline;
        }
      `}

    ${(props) =>
      props.isLast &&
      css`
        color: ${colors.text.muted};
        font-weight: ${typography.weight.medium};
      `}
  `,
  Separator: styled.span`
    padding: 0 ${spacing.xsmall};
    color: ${colors.text.muted};
  `,
};

import styled from "styled-components";
import { colors, spacing, typography } from "@kanddo-ui/core";

export const Component = {
  Wrapper: styled.div`
    width: 100%;
    overflow-x: auto;
    margin-bottom: ${spacing.large};
  `,
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: ${typography.fontFamily};
    background: ${colors.background.default};
  `,
  Row: styled.tr`
    &:nth-child(even) {
      background: ${colors.background.muted};
    }
  `,
  Header: styled.th`
    text-align: left;
    padding: ${spacing.small};
    background: ${colors.background.muted};
    color: ${colors.text.default};
    font-size: ${typography.sizes.small};
    font-weight: bold;
    border-bottom: 2px solid ${colors.background.muted};
  `,
  Cell: styled.td<{ colSpan?: number }>`
    padding: ${spacing.small};
    color: ${colors.text.default};
    font-size: ${typography.sizes.small};
    border-bottom: 1px solid ${colors.background.muted};
  `,
};

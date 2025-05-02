import React from "react";
import { StoryFn } from "@storybook/react";
import { typography } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const TokenCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => <Card title={title}>{children}</Card>;

const WeightItem: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => (
  <div style={{ marginBottom: 8 }}>
    <span style={{ fontWeight: value, fontSize: 16, display: "block" }}>
      {name}
    </span>
    <small>{value}</small>
  </div>
);

const SizeItem: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => (
  <div style={{ marginBottom: 8 }}>
    <span style={{ fontSize: value, fontWeight: 600, display: "block" }}>
      Aa
    </span>
    <small>
      {name} — {value}
    </small>
  </div>
);

const Container = styled.div`
  font-family: ${typography.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

export default {
  title: "Tokens/Typography",
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = () => (
  <Container>
    <TokenCard title="Font Family">
      <p>{typography.fontFamily}</p>
    </TokenCard>

    <TokenCard title="Font Weights">
      {Object.entries(typography.weight).map(([name, value]) => (
        <WeightItem key={name} name={name} value={value} />
      ))}
    </TokenCard>

    <TokenCard title="Font Sizes">
      {Object.entries(typography.sizes).map(([name, value]) => (
        <SizeItem key={name} name={name} value={value} />
      ))}
    </TokenCard>
  </Container>
);

export const Default = Template.bind({});

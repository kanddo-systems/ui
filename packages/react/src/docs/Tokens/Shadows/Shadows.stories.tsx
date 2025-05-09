import React from "react";
import { StoryFn } from "@storybook/react";
import { shadows } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const ShadowBox = styled.div<{ shadow: string }>`
  width: 120px;
  height: 48px;
  margin: 0 auto 8px auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: ${(props) => props.shadow};
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShadowItem: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => (
  <div style={{ marginBottom: 20, textAlign: "center" }}>
    <ShadowBox shadow={value}>{name !== "none" && " "}</ShadowBox>
    <small style={{ display: "block", marginTop: 4 }}>
      {name} — <code>{value}</code>
    </small>
  </div>
);

export default {
  title: "Tokens/Shadows",
  parameters: {
    layout: "centered",
  },
};

const order = [
  "none",
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
];

const Template: StoryFn = () => (
  <Container>
    <Card title="Shadow Tokens">
      {order.map((name) => (
        <ShadowItem key={name} name={name} value={shadows[name]} />
      ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});

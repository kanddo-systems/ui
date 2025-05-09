import React from "react";
import { StoryFn } from "@storybook/react";
import { breakpoints } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const BreakpointBar = styled.div<{ width: string }>`
  height: 24px;
  width: ${(props) => props.width};
  max-width: 100%;
  background: #e2e8f0;
  border-radius: 4px;
  margin: 0 auto 8px auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  min-width: 60px;
`;

const BreakpointLabel = styled.span`
  position: absolute;
  left: 8px;
  top: 2px;
  font-size: 12px;
  color: #444;
`;

const BreakpointItem: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => (
  <div style={{ marginBottom: 20, textAlign: "center", width: "100%" }}>
    <BreakpointBar width={value}>
      <BreakpointLabel>{name}</BreakpointLabel>
      <span style={{ fontSize: 12, color: "#888", marginRight: 8 }}>
        {value}
      </span>
    </BreakpointBar>
  </div>
);

export default {
  title: "Tokens/Breakpoints",
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
    <Card title="Breakpoints">
      {order.map((name) => (
        <BreakpointItem key={name} name={name} value={breakpoints[name]} />
      ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});

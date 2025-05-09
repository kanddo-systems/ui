import React from "react";
import { StoryFn } from "@storybook/react";
import { spacing } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const SpacingBox = styled.div<{ size: string }>`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #e2e8f0;
  border-radius: 4px;
  margin: 8px auto;
`;

const SpacingItem: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div style={{ marginBottom: 16, textAlign: "center" }}>
    <SpacingBox size={value} />
    <small style={{ display: "block", marginTop: 4 }}>
      {name} — {value}
    </small>
  </div>
);

export default {
  title: "Tokens/Spacing",
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = () => (
  <Container>
    <Card title="Spacing Tokens">
      {Object.entries(spacing)
        .sort(([, a], [, b]) => parseInt(a) - parseInt(b))
        .map(([name, value]) => (
          <SpacingItem key={name} name={name} value={value} />
        ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});
import React from "react";
import { StoryFn } from "@storybook/react";
import { rounded, sizes } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const RoundedBox = styled.div<{ radius: string }>`
  width: 80px;
  height: 48px;
  margin: 0 auto 8px auto;
  background: #e2e8f0;
  border-radius: ${(props) => props.radius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoundedItem: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => (
  <div style={{ marginBottom: 20, textAlign: "center" }}>
    <RoundedBox radius={value} />
    <small style={{ display: "block", marginTop: 4 }}>
      {name} — <code>{value}</code>
    </small>
  </div>
);

export default {
  title: "Tokens/Rounded",
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = () => (
  <Container>
    <Card title="Rounded Tokens">
      {Object.keys(sizes).map((name) => (
        <RoundedItem key={name} name={name} value={rounded[name]} />
      ))}
    </Card>
  </Container>
);

export const Default = Template.bind({});

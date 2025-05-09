import React from "react";
import { StoryFn } from "@storybook/react";
import { colors } from "@kanddo-ui/core";
import { Card } from "../../../components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
`;

const ColorBox = styled.div<{ bgColor: string; isDark?: boolean }>`
  width: 100%;
  height: 48px;
  background: ${(props) => props.bgColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isDark ? "#fff" : "#000")};
  font-size: 14px;
  border: 1px solid #e2e8f0;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  width: 100%;
`;

const ColorItem: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  const isDark = (hex: string) => {
    const rgb = parseInt(hex.replace("#", ""), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma < 128;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ColorBox bgColor={color} isDark={isDark(color)}>
        {color}
      </ColorBox>
      <small style={{ display: "block", marginTop: 4 }}>{name}</small>
    </div>
  );
};

export default {
  title: "Tokens/Colors",
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = () => (
  <Container>
    <Card title="Primary Colors">
      <ColorGrid>
        {Object.entries(colors.primary).map(([shade, color]) => (
          <ColorItem key={shade} name={`primary.${shade}`} color={color} />
        ))}
      </ColorGrid>
    </Card>

    <Card title="Background Colors">
      <ColorGrid>
        {Object.entries(colors.background).map(([name, color]) => (
          <ColorItem key={name} name={`background.${name}`} color={color} />
        ))}
      </ColorGrid>
    </Card>

    <Card title="Text Colors">
      <ColorGrid>
        {Object.entries(colors.text).map(([name, color]) => (
          <ColorItem key={name} name={`text.${name}`} color={color} />
        ))}
      </ColorGrid>
    </Card>
  </Container>
);

export const Default = Template.bind({});

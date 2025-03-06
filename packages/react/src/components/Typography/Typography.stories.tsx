import React from "react";
import { StoryFn } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";
import { CombinedSizes, typography } from "@kanddo-ui/core/dist/tokens/typography";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
};

const typographyVariants: { variant: CombinedSizes; title: string }[][] = [
  [
    { variant: "xxxxlarge", title: "Heading 1" },
    { variant: "xxxlarge", title: "Heading 2" },
    { variant: "xxlarge", title: "Heading 3" },
  ],
  [
    { variant: "xlarge", title: "Heading 4" },
    { variant: "large", title: "Heading 5" },
    { variant: "medium", title: "Heading 6" },
  ],
  [
    { variant: "small", title: "Body Default" },
    { variant: "xsmall", title: "Body Small" },
    { variant: "xxsmall", title: "Extra Small" },
  ],
];

const TypographyGroup: React.FC<{ items: { variant: CombinedSizes; title: string }[] }> = ({ items }) => (
  <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
    {items.map((item, index) => (
      <div key={index} style={{ marginBottom: "8px" }}>
        <Typography variant={item.variant}>{item.title}</Typography>
      </div>
    ))}
  </div>
);

const Template: StoryFn<TypographyProps> = () => (
  <div style={{ padding: "24px", maxWidth: "800px" }}>
    <h2 style={{ marginBottom: "32px", fontFamily: typography.fontFamily }}>
      Typography
    </h2>
    {typographyVariants.map((group, index) => (
      <TypographyGroup key={index} items={group} />
    ))}
  </div>
);

export const Default = Template.bind({});

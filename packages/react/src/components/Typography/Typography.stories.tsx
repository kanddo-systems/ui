import React from "react";
import { StoryFn } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn<TypographyProps> = () => (
  <div style={{ padding: "24px" }}>
    <h2 style={{ marginBottom: "32px", fontFamily: "Montserrat" }}>
      Typography
    </h2>
    {[
      {
        items: [
          { variant: "h1" as const, title: "Heading 1" },
          { variant: "h2" as const, title: "Heading 2" },
          { variant: "h3" as const, title: "Heading 3" },
        ],
      },
      {
        items: [
          { variant: "h4" as const, title: "Heading 4" },
          { variant: "h5" as const, title: "Heading 5" },
          { variant: "h6" as const, title: "Heading 6" },
        ],
      },
      {
        items: [
          { variant: "default" as const, title: "Body Default" },
          { variant: "bodySmall" as const, title: "Body Small" },
          { variant: "bodyExtraSmall" as const, title: "Body Extra Small" },
        ],
      },
    ].map((group, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <div>
          {group.items.map((item, index) => (
            <div key={index}>
              <Typography variant={item.variant}>{item.title}</Typography>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});

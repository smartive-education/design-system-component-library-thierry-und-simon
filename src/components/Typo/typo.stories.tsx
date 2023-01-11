import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Typography, TypographyType } from "./typo";

export default {
  title: "Example/Typography",
  component: Typography,
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4", "p"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Test</Typography>
);

export const TypographyComponent = Template.bind({});
TypographyComponent.args = {
  type: TypographyType.h1,
};

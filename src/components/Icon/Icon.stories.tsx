import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Icon, IconType } from "./Icon";

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>Überschrift {args.type}</Icon>
);

export const IconComponent = Template.bind({});
IconComponent.args = {
  type: IconType.h1,
};

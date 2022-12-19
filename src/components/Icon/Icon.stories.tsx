import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Icon, IconType } from "./Icon";

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    type: {
      options: ["SvgMumble", "SvgProfile"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconComponent = Template.bind({});
IconComponent.args = {
  type: IconType.mumble,
};

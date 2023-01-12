import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});

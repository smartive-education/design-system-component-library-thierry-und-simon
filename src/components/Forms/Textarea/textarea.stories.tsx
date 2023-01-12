import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea } from "./textarea";

export default {
  title: "Example/Textarea",
  component: Textarea,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const TextareaComponent = Template.bind({});

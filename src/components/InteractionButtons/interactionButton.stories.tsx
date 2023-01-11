import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InteractionButton, InteractionButtonType } from "./interactionButton";

export default {
  title: "Example/InteractionButton",
  component: InteractionButton,
  argTypes: {
    type: { control: "radio", options: InteractionButtonType },
    count: { control: "number" },
  },
} as ComponentMeta<typeof InteractionButton>;

const Template: ComponentStory<typeof InteractionButton> = (args) => (
  <InteractionButton {...args} />
);

export const IconLinkComponent = Template.bind({});
IconLinkComponent.args = {
  type: InteractionButtonType.like,
};

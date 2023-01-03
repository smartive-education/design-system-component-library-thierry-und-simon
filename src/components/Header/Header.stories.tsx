import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Header, HeaderType } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>Überschrift {args.type}</Header>
);

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  type: HeaderType.h1,
};

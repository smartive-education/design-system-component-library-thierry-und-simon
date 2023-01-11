import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link } from "./link";

export default {
  title: "Example/Link",
  component: Link,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link Label</Link>
);

export const LinkComponent = Template.bind({});

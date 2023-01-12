import React, { Children } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FileUpload } from "./fileUpload";

export default {
  title: "Example/FileUpload",
  component: FileUpload,
  argTypes: {
    children: {},
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const FielUploadComponent = Template.bind({});

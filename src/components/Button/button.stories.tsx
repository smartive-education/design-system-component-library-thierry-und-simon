import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, ButtonType } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: { control: 'radio', options: ['medium', 'large', 'nolabel'] },
    color: {
      control: 'radio',
      options: ['violet', 'slate', 'gradiant'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const LargeViolet = Template.bind({});
LargeViolet.args = {
  size: 'large',
  label: 'Button Label',
  color: 'violet',
};

export const LargeSlate = Template.bind({});
LargeSlate.args = {
  size: 'large',
  color: 'slate',
  label: 'Button Label',
};

export const LargeGradiant = Template.bind({});
LargeGradiant.args = {
  size: 'large',
  label: 'Button Label',
  color: 'gradiant',
};

export const MediumViolet = Template.bind({});
MediumViolet.args = {
  size: 'medium',
  label: 'Button Label',
  color: 'violet',
};

export const MediumSlate = Template.bind({});
MediumSlate.args = {
  size: 'medium',
  label: 'Button Label',
  color: 'slate',
};

export const MediumGradiant = Template.bind({});
MediumGradiant.args = {
  size: 'medium',
  label: 'Button Label',
  color: 'gradiant',
};

export const noLabel = Template.bind({});
noLabel.args = {
  size: 'nolabel',
  label: 'Button Label',
  color: 'slate',
};

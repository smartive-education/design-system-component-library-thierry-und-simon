import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconLink, IconLinkType } from './iconLink';
import { IconType } from '../Icon/Icon';

export default {
  title: 'Example/IconLink',
  component: IconLink,
  argTypes: {
    type: { control: 'radio', options: IconLinkType },
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => (
  <IconLink {...args} />
);

export const IconLinkComponent = Template.bind({});
IconLinkComponent.args = {
  type: IconLinkType.violet,
  icon: IconType.mumble,
  text: 'Username',
};

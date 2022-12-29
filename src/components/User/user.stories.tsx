import React from 'react';
import { User, SizeType } from './user';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/User',
  component: User,
  argTypes: {
    type: { control: 'radio', options: SizeType },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const UserSM = Template.bind({});
UserSM.args = {
  type: SizeType.SM,
};

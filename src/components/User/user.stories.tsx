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

export const UserBase = Template.bind({});
UserBase.args = {
  type: SizeType.BASE,
};

export const UserLG = Template.bind({});
UserLG.args = {
  type: SizeType.LG,
};

export const UserXL = Template.bind({});
UserXL.args = {
  type: SizeType.XL,
};

export const UserTile = Template.bind({});
UserTile.args = {
  type: SizeType.TILE,
};

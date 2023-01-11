import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserImage, UserImageSizeType } from './userImage';

export default {
  title: 'Example/UserImage',
  component: UserImage,
  argTypes: {
    type: { control: 'radio', options: UserImageSizeType },
  },
} as ComponentMeta<typeof UserImage>;

const Template: ComponentStory<typeof UserImage> = (args) => (
  <UserImage {...args} />
);

export const UserImageS = Template.bind({});
UserImageS.args = {
  type: UserImageSizeType.S,
};

export const UserImageM = Template.bind({});
UserImageM.args = {
  type: UserImageSizeType.M,
};

export const UserImageLG = Template.bind({});
UserImageLG.args = {
  type: UserImageSizeType.LG,
};

export const UserImageXL = Template.bind({});
UserImageXL.args = {
  type: UserImageSizeType.XL,
};

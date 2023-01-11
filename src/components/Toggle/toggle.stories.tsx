import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Toggle } from './toggle';

export default {
  title: 'Example/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const defaultToggle = Template.bind({});

import React from 'react';
import { StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
};

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const WithLetters = Template.bind({});
WithLetters.args = {
    letters: 'AB',
    size: 'medium',
};

export const WithImage = Template.bind({});
WithImage.args = {
    imageUrl: 'https://github.com/shadcn.png',
    size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
    letters: 'AB',
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    letters: 'AB',
    size: 'large',
};
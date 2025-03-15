import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { OtpInput, OtpInputProps } from './OtpInput';

export default {
    title: 'Components/OtpInput',
    component: OtpInput,
    parameters: {
        layout: 'centered',
    }
};

const Template: StoryFn<OtpInputProps> = (args) => {
    const [_, setValue] = useState('');

    return <OtpInput {...args} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Enter OTP',
    length: 6,
    hint: 'Check your SMS or email for the code.',
};

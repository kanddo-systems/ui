import React from 'react';
import styled from 'styled-components';
import { transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';
import { Button } from '../../components/Button/Button';
import { Typography } from '../../components/Typography/Typography';

export interface WelcomeProps {
    title: string;
    description: string;
}

export const Component = {
    Wrapper: styled.div`
        font-family: ${typography.fontFamily};
        padding: ${spacing.large};
        color: ${colors.text.default};
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
    `,
    SectionTitle: styled.h2`
        font-size: ${typography.sizes.large};
        margin-top: ${spacing.medium};
        color: ${colors.text.default};
    `,
    List: styled.ul`
        list-style-type: none;
        padding: 0;
    `,
    ListItem: styled.li`
        font-size: ${typography.sizes.medium};
        margin-bottom: ${spacing.small};
        a {
            color: ${colors.primary[400]};
            text-decoration: none;
            transition: ${transitions.color};
            &:hover {
                color: ${colors.primary[500]};
            }
        }
    `,
};

export const Welcome: React.FC<WelcomeProps> = ({ title, description }) => {
    return (
        <Component.Wrapper>
            <Typography variant='h1'>{title}</Typography>
            <Typography variant='default'>{description}</Typography>
            <Component.SectionTitle>Getting Started</Component.SectionTitle>
            <Component.List>
                <Component.ListItem>Install the package with <code>npm install <b>@kanddo-ui/react</b></code></Component.ListItem>
                <Component.ListItem>Explore the components in the sidebar.</Component.ListItem>
                <Component.ListItem>Customize the design tokens to fit your project needs.</Component.ListItem>
            </Component.List>
            <Button>Get Started</Button>
        </Component.Wrapper>
    );
};

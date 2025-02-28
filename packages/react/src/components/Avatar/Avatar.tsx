import React from 'react';
import { Component } from './Avatar.styles';

export interface AvatarProps {
    letters?: string;
    imageUrl?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Avatar: React.FC<AvatarProps> = ({ letters, imageUrl, size = 'medium' }) => {
    return (
        <Component.Wrapper size={size}>
            {imageUrl ? (
                <Component.Image src={imageUrl} alt="Avatar" />
            ) : (
                <Component.Letters>{letters}</Component.Letters>
            )}
        </Component.Wrapper>
    );
};
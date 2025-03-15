import React, { FC, memo, useMemo } from 'react';
import { Component } from './Avatar.styles';

export interface AvatarProps {
    letters?: string;
    imageUrl?: string;
    size?: 'small' | 'medium' | 'large';
}

const AvatarComponent: FC<AvatarProps> = ({ letters, imageUrl, size = 'medium' }) => {
    const A11yAltText = useMemo(() => (letters ? ` ${letters}'s Avatar` : 'Avatar'), [letters]);

    return (
        <Component.Wrapper size={size} aria-label={A11yAltText}>
            {imageUrl ? (
                <Component.Image src={imageUrl} alt={A11yAltText} />
            ) : (
                <Component.Letters aria-hidden={!letters}>{letters || '??'}</Component.Letters>
            )}
        </Component.Wrapper>
    );
};

export const Avatar = memo(AvatarComponent);

import styled from 'styled-components';
import { colors, typography, borderRadius } from '@kanddo-ui/core';

const avatarSizes = {
    small: '40px',
    medium: '60px',
    large: '80px',
};

export const Component = {
    Wrapper: styled.div<{ size: 'small' | 'medium' | 'large' }>`
    font-family: ${typography.fontFamily};
    width: ${({ size }) => avatarSizes[size]};
    height: ${({ size }) => avatarSizes[size]};
    border-radius: 100%;
    background-color: ${colors.background.muted};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid ${colors.primary[500]};
  `,
    Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
    Letters: styled.span`
    font-size: ${typography.sizes.small};
    color: ${colors.primary[500]};
    font-weight: ${typography.weight.bold};
  `,
};
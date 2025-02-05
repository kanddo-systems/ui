export const sizes = {
    none: 'none',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xsmall: 'xsmall',
    xlarge: 'xlarge',
    xxlarge: 'xxlarge',
} as const;

export type Sizes = typeof sizes;
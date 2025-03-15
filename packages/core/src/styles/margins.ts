import { Sizes } from "../tokens/sizes";

export const margins: { [K in keyof Sizes]: string } = {
    none: '0px',
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
};
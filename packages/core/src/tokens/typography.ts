import { sizes } from "./sizes";

const extraSizes = {
    xxsmall: 'xxsmall',
    xxxlarge: 'xxxlarge',
    xxxxlarge: 'xxxxlarge',
};
export type CombinedSizes = Exclude<keyof typeof sizes | keyof typeof extraSizes, 'none'>;
type Typography = {
    fontFamily: string;
    weight: {
        light: string;
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
        extraBold: string;
    };
    sizes: {
        [K in CombinedSizes]: string;
    }
}
export const typography: Typography = {
    fontFamily: '"Montserrat", sans-serif',
    weight: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
    },
    sizes: {
        xxsmall: '10px',
        xsmall: '12px',
        small: '14px',
        medium: '16px',
        large: '18px',
        xlarge: '20px',
        xxlarge: '24px',
        xxxlarge: '28px',
        xxxxlarge: '32px',
    }
};
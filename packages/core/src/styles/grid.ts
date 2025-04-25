import { Sizes } from "../tokens/sizes";

type Grid = {
    containerWidth: string,
    rowGap: string,
    columnGap: string,
    breakpoints: { [K in keyof Sizes]: string }
}
export const grid: Grid = {
    containerWidth: '1248px',
    rowGap: '16px',
    columnGap: '16px',
    breakpoints: {
        none: '0px',
        xsmall: '448px',
        small: '576px',
        medium: '768px',
        large: '992px',
        xlarge: '1248px',
        xxlarge: '2016px',
    },
};
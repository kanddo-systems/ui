import { rounded, sizes } from "../tokens";

export const borderRadius = (size: keyof typeof sizes) => {
    return rounded[size];
};
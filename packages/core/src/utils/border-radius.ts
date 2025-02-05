import { rounded } from "../tokens";

export const borderRadius = (size: keyof typeof rounded) => {
    return rounded[size];
};
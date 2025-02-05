import { rounded } from "../tokens";

export const borderRadius = (size: keyof typeof rounded) => {
    return `border-radius: ${rounded[size]};`;
};
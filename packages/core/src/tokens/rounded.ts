import { Sizes } from "./sizes";

export const rounded: { [K in keyof Sizes]: string } = {
  none: "0px",
  small: "4px",
  medium: "8px",
  large: "16px",
  xsmall: "2px",
  xlarge: "24px",
  xxlarge: "32px",
};

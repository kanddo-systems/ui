import { Sizes } from "./sizes";

export const spacing: { [K in keyof Sizes]: string } = {
  none: "0px",
  small: "8px",
  medium: "16px",
  large: "32px",
  xsmall: "4px",
  xlarge: "64px",
  xxlarge: "128px",
};

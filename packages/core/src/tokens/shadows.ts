import { Sizes } from "./sizes";

export const shadows: { [K in keyof Sizes]: string } = {
  none: "none",
  small: "0 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  large: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  xsmall: "0 1px 2px rgba(0, 0, 0, 0.05)",
  xlarge: "0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  xxlarge: "0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.22)",
};

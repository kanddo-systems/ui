import { Sizes } from "./sizes";

export const breakpoints: { [K in keyof Sizes]: string } = {
  none: "0px",
  xsmall: "360px",
  small: "480px",
  medium: "768px",
  large: "1024px",
  xlarge: "1280px",
  xxlarge: "1536px",
};

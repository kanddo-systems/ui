import { colors, rounded, spacing, typography } from "../tokens";
import { Sizes } from "../tokens/sizes";

export const generateCSSVariables = () => {
  return `
    :root {
      --primary-color: ${colors.primary};
      --font-size: ${typography.sizes.medium};
      --font-family: ${typography.fontFamily};
      --spacing-small: ${spacing.small};
      --spacing-medium: ${spacing.medium};
      --spacing-large: ${spacing.large};
    }
  `;
};

export const borderRadius: { [K in keyof Sizes]: string } = {
  none: rounded.none,
  small: rounded.small,
  medium: rounded.medium,
  large: rounded.large,
  xsmall: rounded.xsmall,
  xlarge: rounded.xlarge,
  xxlarge: rounded.xxlarge,
};

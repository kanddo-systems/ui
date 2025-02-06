import { colors, rounded, spacing, typography } from '../tokens';

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

export const borderRadius = {
  small: rounded.small,
  medium: rounded.medium,
  large: rounded.large,
  full: rounded.full,
};
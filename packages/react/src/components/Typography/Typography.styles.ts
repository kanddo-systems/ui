import styled from 'styled-components';
import { colors, typography } from '@kanddo-ui/core';

export const typographyStyles = {
    h1: { fontSize: typography.sizes.xxxxLarge, fontWeight: typography.weight.bold },
    h2: { fontSize: typography.sizes.xxxLarge, fontWeight: typography.weight.semiBold },
    h3: { fontSize: typography.sizes.xxLarge, fontWeight: typography.weight.medium },
    h4: { fontSize: typography.sizes.xLarge, fontWeight: typography.weight.semiBold },
    h5: { fontSize: typography.sizes.large, fontWeight: typography.weight.regular },
    h6: { fontSize: typography.sizes.medium, fontWeight: typography.weight.light },
    default: { fontSize: typography.sizes.small, fontWeight: typography.weight.regular },
    bodySmall: { fontSize: typography.sizes.xSmall, fontWeight: typography.weight.light }
};

export const Component = styled.span<{ variant: keyof typeof typographyStyles }>`
    font-family: ${typography.fontFamily};
    color: ${colors.text.default};
    font-size: ${(props) => typographyStyles[props.variant].fontSize};
    font-weight: ${(props) => typographyStyles[props.variant].fontWeight};
`;

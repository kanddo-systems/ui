import styled from 'styled-components';
import { colors, typography } from '@kanddo-ui/core';
import { CombinedSizes } from '@kanddo-ui/core/dist/tokens/typography';

const typographyStyles = {
    xxxxlarge: { fontSize: typography.sizes.xxxxlarge, fontWeight: typography.weight.bold },
    xxxlarge: { fontSize: typography.sizes.xxxlarge, fontWeight: typography.weight.semiBold },
    xxlarge: { fontSize: typography.sizes.xxlarge, fontWeight: typography.weight.medium },
    xlarge: { fontSize: typography.sizes.xlarge, fontWeight: typography.weight.semiBold },
    large: { fontSize: typography.sizes.large, fontWeight: typography.weight.regular },
    medium: { fontSize: typography.sizes.medium, fontWeight: typography.weight.light },
    small: { fontSize: typography.sizes.small, fontWeight: typography.weight.regular },
    xsmall: { fontSize: typography.sizes.xsmall, fontWeight: typography.weight.light },
    xxsmall: { fontSize: typography.sizes.xxsmall, fontWeight: typography.weight.light },
};

export const Component = styled.span<{ variant: CombinedSizes }>`
    font-family: ${typography.fontFamily};
    color: ${colors.text.default};
    font-size: ${(props) => typographyStyles[props.variant]?.fontSize || typography.sizes.small};
    font-weight: ${(props) => typographyStyles[props.variant]?.fontWeight || typography.weight.regular};
`;

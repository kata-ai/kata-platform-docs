import * as React from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { styledWrapper as styled } from 'utils/primitives';
import { TextSizes } from 'components/Theme';

import { determineFontDimensions } from '../utils';
import { Typography, TypographyProps } from './Typography';

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography).withConfig({ shouldForwardProp })`
  letter-spacing: -0.05px;
`;

export interface TextProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the text. */
  size?: keyof TextSizes;
}

/**
 * Text component provided as a styled component primitive.
 */
export const Text: React.FC<TextProps> = ({ children, as, size, ...rest }) => (
  <StyledText as={as} {...determineFontDimensions('text', size)} {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  as: 'span',
  size: 300
};

Text.displayName = 'Text';

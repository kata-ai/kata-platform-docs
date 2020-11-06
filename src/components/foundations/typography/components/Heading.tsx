import * as React from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { styledWrapper as styled } from 'utils/primitives';
import { HeadingSizes } from 'components/Theme';

import { determineFontDimensions } from '../utils';
import { Typography, TypographyProps } from './Typography';

export interface HeadingProps extends TypographyProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** Size value of the heading. */
  size?: keyof HeadingSizes;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const StyledText = styled(Typography).withConfig({ shouldForwardProp })<HeadingProps>`
  ${(props) => props.size === 100 && 'text-transform: uppercase;'}
`;

/**
 * Heading component provided as a styled component primitive.
 */
export const Heading: React.FC<HeadingProps> = ({ children, as, size, color, ...rest }) => (
  <StyledText
    as={as}
    color={size === 100 ? 'grey05' : color}
    {...determineFontDimensions('heading', size)}
    size={size}
    {...rest}
  >
    {children}
  </StyledText>
);

Heading.defaultProps = {
  as: 'h2',
  color: 'grey09',
  size: 800
};

Heading.displayName = 'Heading';

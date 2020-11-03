import * as React from 'react';

import { Omit } from 'utils/types';
import { determineFontDimensions } from '../utils';
import { TextProps, Text } from './Text';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Omit<TextProps, 'as'> {}

/**
 * Link component provided as a styled component primitive.
 */
export const Link: React.FC<LinkProps> = ({ children, size, ...rest }) => {
  return (
    <Text as="a" {...determineFontDimensions('text', size)} {...rest}>
      {children}
    </Text>
  );
};

Link.displayName = 'Link';

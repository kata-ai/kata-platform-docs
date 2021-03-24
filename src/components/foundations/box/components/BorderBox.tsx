import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  BackgroundProps,
  HeightProps,
  MaxWidthProps,
  SpaceProps,
  borderRadius,
  BorderRadiusProps,
  WidthProps
} from 'styled-system';

import { styledWrapper } from 'utils/primitives';
import { getColor } from 'utils/helpers';
import { Color } from 'components/Theme';
import { Box, BoxProps } from './Box';

export interface BorderBoxProps
  extends BackgroundProps,
    HeightProps,
    MaxWidthProps,
    SpaceProps,
    BorderRadiusProps,
    WidthProps,
    BoxProps {
  /** Set to `true` to enable `overflow: hidden;`. */
  noOverflow?: boolean;
  /** The color key for the border. */
  borderColor?: Color;
}

/**
 * An extended `Box` with additional hooks to set border.
 */
export const BorderBox = styledWrapper(Box).withConfig({ shouldForwardProp })<BorderBoxProps>`
  border: 1px solid ${(props) => getColor(props.borderColor ? props.borderColor : 'grey02')};
  ${borderRadius};
  ${(props) => props.noOverflow && 'overflow: hidden;'}
`;

BorderBox.displayName = 'BorderBox';

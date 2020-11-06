import * as React from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  background,
  BackgroundProps,
  bottom,
  BottomProps,
  color as styledColor,
  ColorProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  left,
  LeftProps,
  maxWidth,
  MaxWidthProps,
  position,
  PositionProps,
  right,
  RightProps,
  space as styledSpace,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps
} from 'styled-system';

import { styledWrapper } from 'utils/primitives';

export interface BoxProps
  extends BackgroundProps,
    BottomProps,
    BottomProps,
    ColorProps,
    DisplayProps,
    HeightProps,
    LeftProps,
    LeftProps,
    MaxWidthProps,
    PositionProps,
    PositionProps,
    RightProps,
    SpaceProps,
    TextAlignProps,
    TopProps,
    WidthProps,
    ZIndexProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

/**
 * Box is a view with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
export const Box = styledWrapper('div').withConfig({ shouldForwardProp })<BoxProps>`
  ${background};
  ${bottom};
  ${display};
  ${height};
  ${left};
  ${maxWidth};
  ${position};
  ${right};
  ${styledColor};
  ${styledSpace};
  ${textAlign};
  ${top};
  ${width};
  ${zIndex};
`;

Box.displayName = 'Box';

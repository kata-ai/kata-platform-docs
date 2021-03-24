import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  display,
  maxWidth,
  space,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textAlign,
  verticalAlign,
  letterSpacing,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MaxWidthProps,
  SpaceProps,
  DisplayProps,
  TextAlignProps,
  VerticalAlignProps,
  LetterSpacingProps
} from 'styled-system';

import { styledWrapper as styled } from 'utils/primitives';

export interface TypographyProps
  extends DisplayProps,
    MaxWidthProps,
    SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    TextAlignProps,
    VerticalAlignProps,
    LetterSpacingProps {
  /** Extended color props. */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const Typography = styled('div').withConfig({ shouldForwardProp })<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontFamily}
  ${fontSize};
  ${fontWeight}
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
  ${letterSpacing};
`;

Typography.displayName = 'Typography';

import { css } from 'utils/styled';
import theme from './theme';

export const getEmSize = (size: number) => size / theme.dimensions.fontSize.regular;

// event wrapper
export const onEvent = (styles: TemplateStringsArray, ...interpolations: any[]) => css`
  &:hover,
  &:focus {
    ${css(styles, ...interpolations)};
  }
`;

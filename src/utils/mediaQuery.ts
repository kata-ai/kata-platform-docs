import { createMediaMatcher } from 'react-media-match';
import theme from 'styles/theme';

const MediaQuery = createMediaMatcher({
  mobile: `(max-width: ${theme.breakpoints.md - 1}px)`,
  tablet: `(max-width: ${theme.breakpoints.lg - 1}px)`,
  desktop: `(min-width: ${theme.breakpoints.lg}px)`
});

export default MediaQuery;

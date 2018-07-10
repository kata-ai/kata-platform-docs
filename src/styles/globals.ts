import { injectGlobal } from 'utils/styled';
import { onEvent } from './mixins';

import normalize from './normalize';
import theme from './theme';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${theme.dimensions.fontSize.regular}px;
    line-height: ${theme.dimensions.lineHeight.regular}px;

    @media (min-width: ${theme.breakpoints.lg}px) {
      font-size: ${theme.dimensions.fontSize.large}px;
    }
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${theme.fonts.sansSerif};
    color: ${theme.colors.gray.copy};
    background-color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.body};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    color: ${theme.colors.brand};
    text-decoration: none;

    ${onEvent`
      text-decoration: underline;
    `}
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${theme.fonts.monospace};
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${theme.colors.ui.light};
  }

  th {
    text-align: left;
  }

  thead {
    tr {
      th {
        color: ${theme.colors.gray.dark};
      }
    }
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${theme.colors.ui.whisper};
        }
        tr {
          background-color: ${theme.colors.ui.whisper};
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.ink};
    font-weight: ${theme.fontWeights.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${theme.dimensions.headingSizes.h1}px;
    line-height: ${theme.dimensions.lineHeight.heading.h1}px;
  }

  h2 {
    font-size: ${theme.dimensions.headingSizes.h2}px;
    line-height: ${theme.dimensions.lineHeight.heading.h2}px;
  }

  h3 {
    font-size: ${theme.dimensions.headingSizes.h3}px;
    line-height: ${theme.dimensions.lineHeight.heading.h3}px;
  }

  h4,
  h5,
  h6 {
    font-size: ${theme.dimensions.headingSizes.h4}px;
    line-height: ${theme.dimensions.lineHeight.heading.h4}px;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  b, strong {
    font-weight: ${theme.fontWeights.strong};
    color: ${theme.colors.ink}};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul,
  ol {
    padding-left: 1.45rem;

    li {
      padding-left: 0;
      margin-bottom: .5rem;
    }
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${theme.colors.ui.light};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${theme.colors.ui.light};
    color: ${theme.colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${theme.breakpoints.md}) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  code {
    padding: 0.25rem 0.5rem;
    font-size: 90%;
    color: ${theme.colors.gray.copy};
    background-color: #f4f5f6;
    border-radius: 3px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  pre code {
    padding: 0;
    font-size: 90%;
    color: inherit;
    background-color: transparent;
  }

  code[class*="language-"], pre[class*="language-"] {
    font-family: ${theme.fonts.monospace} !important;
  }
`;

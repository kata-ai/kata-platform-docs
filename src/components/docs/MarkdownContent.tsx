import React from 'react';
import styled from '../../utils/styled';
import { breakpoints, fontSizes, lineHeights, colors } from '../../styles/variables';

interface MarkdownContentProps {
  className?: string;
  html: string;
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <MarkdownWrapper className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default MarkdownContent;

export const MarkdownWrapper = styled('section')`
  font-size: ${fontSizes.kilo};
  line-height: ${lineHeights.kilo};
  font-weight: 300;

  .text-primary {
    font-weight: 300;
    font-size: ${fontSizes.giga};
    line-height: ${lineHeights.giga};

    strong {
      font-weight: 500;
    }

    @media (min-width: ${breakpoints.md}px) {
      font-size: ${fontSizes.tera};
      line-height: ${lineHeights.tera};
    }
  }

  strong {
    font-weight: 700;
    color: ${colors.neutral09};
  }

  dl {
    margin-top: 0;
    margin-bottom: 24px;
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
    border-top: 1px solid ${colors.neutral02};
  }

  small {
    font-size: ${fontSizes.deka};
    line-height: ${lineHeights.deka};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${colors.neutral02};
    color: ${colors.neutral06};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${breakpoints.md}px) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  .principle {
    &:not(:last-child) {
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }

  .principle-image {
    > * {
      margin: 0;
    }

    .gatsby-resp-image-wrapper {
      margin: 0 !important;
    }
  }

  .principle-content {
    h2,
    h3,
    h4 {
      margin-top: 32px;

      @media (min-width: ${breakpoints.md}px) {
        margin-top: 0;
      }
    }

    &.pallette-sample {
      .gatsby-resp-image-wrapper {
        margin: 0 !important;
      }

      @media (min-width: ${breakpoints.md}px) {
        margin-left: 80px;
      }
    }
  }

  .component-guide-image {
    .gatsby-resp-image-wrapper {
      margin: 0 !important;
    }
  }

  .component-guide-content {
    margin-top: 24px;

    h2,
    h3,
    h4,
    h5 {
      margin-top: 32px;

      @media (min-width: ${breakpoints.md}px) {
        margin-top: 0;
      }
    }

    &.pallette-sample {
      .gatsby-resp-image-wrapper {
        margin: 0 !important;
      }

      @media (min-width: ${breakpoints.md}px) {
        margin-left: 80px;
      }
    }

    @media (min-width: ${breakpoints.md}px) {
      margin-top: 0;
    }
  }

  .gatsby-highlight {
    margin: 1rem 0;
    font-size: 90%;
  }

  code,
  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }

  code {
    font-size: 80%;
    white-space: pre-wrap;
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

  code[class*='language-'] {
    background-color: ${colors.neutral01} !important;
  }

  pre[class*='language-'] {
    border: 1px solid ${colors.neutral05} !important;
    background-color: ${colors.neutral01} !important;
    border-radius: 4px;
  }

  a[href^='#fn-'],
  a[href^='#fnref-'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }

  .footnotes {
    margin-top: 2rem;
    font-size: 85%;

    li[id^='fn-'] {
      p {
        /* Remark for some reason puts the footnote reflink *after* the 'p' tag. */
        display: inline;
      }
    }
  }
`;

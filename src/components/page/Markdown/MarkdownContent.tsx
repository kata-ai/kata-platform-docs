import React from 'react';
import styled from 'styled-components';
import { space, breakpoints } from 'utils/variables';

interface MarkdownContentProps {
  className?: string;
  html?: string;
}

const Section = styled('section')`
  h1,
  h2,
  h3 {
    &:first-child {
      margin-top: 0 !important;
    }
  }

  .gatsby-highlight {
    margin: ${space.sm}px 0;
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
        // Remark for some reason puts the footnote reflink *after* the 'p' tag.
        display: inline;
      }
    }
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;

    @media (min-width: ${breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
`;

const MarkdownContent: React.FC<MarkdownContentProps> = ({ className, html, children }) => {
  if (html) {
    return <Section className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <Section className={className}>{children}</Section>;
};

export default MarkdownContent;

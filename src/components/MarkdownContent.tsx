import React from 'react';
import styled from 'utils/styled';

interface MarkdownContentProps {
  className?: string;
  html: string;
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <section className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default styled(MarkdownContent)`
  ul {
    list-style-type: none;

    li {
      &::before {
        position: absolute;
        content: '•';
        color: ${props => props.theme.colors.brand};
        margin-left: -1.45rem;
      }
    }
  }

  li {
    p {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    + li {
      margin-top: 0.5rem;
    }

    ul,
    ol {
      margin: 0.5rem 0;
    }
  }

  .gatsby-highlight {
    margin: 1rem 0;
    font-size: 90%;

    code,
    pre {
      white-space: pre-wrap;
      word-break: break-word;
    }
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

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
`;

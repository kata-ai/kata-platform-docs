import React from 'react';
import styled from 'styled-components';
import { colors, textSizes } from 'utils/variables';
import { SocialMedia } from 'interfaces/gatsby';

interface FooterProps {
  version: string;
  siteLastUpdated: string;
  socials?: SocialMedia[];
}

const Wrapper = styled('footer')`
  padding-top: 24px;
  border-top: 1px solid ${colors.grey02};

  p {
    margin: 0;
    font-size: ${textSizes[300].fontSize}px;
    line-height: ${textSizes[300].lineHeight}px;
  }
`;

const Footer: React.FC<FooterProps> = () => (
  <Wrapper>
    <p>
      <small>
        Created with{' '}
        <a href="https://github.com/kata-ai/grundgesetz-skeleton" target="_blank" rel="noopener noreferrer">
          Grundgesetz
        </a>
        .
      </small>
    </p>
  </Wrapper>
);

export default Footer;

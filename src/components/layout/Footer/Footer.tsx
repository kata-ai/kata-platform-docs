import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { colors, breakpoints, space } from 'utils/variables';
import { SocialMedia } from 'interfaces/gatsby';
import { Text } from 'components/foundations';

interface FooterProps {
  version: string;
  siteLastUpdated: string;
  socials?: SocialMedia[];
}

const Wrapper = styled('footer')`
  padding-top: 24px;
  border-top: 1px solid ${colors.grey02};
`;

const Inner = styled('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const SocialMediaList = styled('ul')`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SocialMediaListItem = styled('li')`
  margin: 0;
  margin-left: 8px;
  margin-right: 8px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SocialMediaLink = styled(OutboundLink)`
  display: inline-block;
  color: inherit;
  vertical-align: middle;
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const FooterSection = styled('section')`
  @media (max-width: ${breakpoints.md - 1}px) {
    &:not(:first-child) {
      margin-top: ${space.sm}px;
    }
  }
`;

const Footer: React.FC<FooterProps> = ({ version, siteLastUpdated, socials }) => {
  const date = new Date(siteLastUpdated);

  return (
    <Wrapper>
      <Inner>
        <FooterSection>
          <Text as="p" size={200} color="grey05">
            Copyright &copy; {format(date, 'YYYY')} Kata.ai. All rights reserved.
          </Text>
          <Text as="p" size={200} color="grey05">
            Version {version}. Last updated {format(date, 'D MMMM YYYY')}.
          </Text>
        </FooterSection>
        {socials && (
          <FooterSection>
            <SocialMediaList>
              {socials.map((social, i) => (
                <SocialMediaListItem key={i}>
                  <SocialMediaLink href={social.url} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/${social.imgpath}`} alt={social.name} />
                  </SocialMediaLink>
                </SocialMediaListItem>
              ))}
            </SocialMediaList>
          </FooterSection>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Footer;

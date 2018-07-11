import React from 'react';
import moment from 'moment';
import styled from 'utils/styled';
import Container from './Container';
import { SocialMedia } from 'interfaces/gatsby';

const Wrapper = styled('footer')`
  margin: 0;
  padding: ${props => props.theme.dimensions.containerPadding}px 0;
  font-size: 12px;
  line-height: 18px;

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    margin-bottom: 5rem;
  }
`;

const Inner = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${props => props.theme.dimensions.containerPadding}px;
  border-top: 1px solid ${props => props.theme.colors.border};

  & p {
    margin: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const FooterLeft = styled('div')``;

const FooterRight = styled('div')``;

const SocialMediaList = styled('ul')`
  display: flex;
  flex-direction: row;
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

  a {
    display: inline-block;
    color: inherit;
    vertical-align: middle;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    img {
      display: inline-block;
    }
  }
`;

interface FooterProps {
  version: string;
  siteLastUpdated: string;
  socials?: SocialMedia[];
}

const Footer: React.SFC<FooterProps> = ({ version, siteLastUpdated, socials }) => (
  <Wrapper>
    <Container>
      <Inner>
        <FooterLeft>
          <p>&copy; 2018 Kata.ai. All rights reserved.</p>
          <p>
            Version {version}. Last updated {moment(siteLastUpdated).format('D MMMM YYYY')}.
          </p>
        </FooterLeft>
        <FooterRight>
          {socials && (
            <SocialMediaList>
              {socials.map((social, i) => (
                <SocialMediaListItem key={i}>
                  <a href={social.url}>
                    <img src={`/images/${social.imgpath}`} alt={social.name} />
                  </a>
                </SocialMediaListItem>
              ))}
            </SocialMediaList>
          )}
        </FooterRight>
      </Inner>
    </Container>
  </Wrapper>
);

export default Footer;

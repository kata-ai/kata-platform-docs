import React from 'react';
import moment from 'moment';
import styled from 'utils/styled';
import Container from './Container';

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
  padding-top: ${props => props.theme.dimensions.containerPadding}px;
  border-top: 1px solid ${props => props.theme.colors.border};

  & p {
    margin: 0;
  }
`;

interface FooterProps {
  version: string;
  siteLastUpdated: string;
}

const Footer: React.SFC<FooterProps> = ({ version, siteLastUpdated }) => (
  <Wrapper>
    <Container>
      <Inner>
        <p>&copy; 2018 Kata.ai. All rights reserved.</p>
        <p>
          Version {version}. Last updated {moment(siteLastUpdated).format('D MMMM YYYY')}.
        </p>
      </Inner>
    </Container>
  </Wrapper>
);

export default Footer;

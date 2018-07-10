import React from 'react';
import styled from 'utils/styled';
import Container from './Container';

const Wrapper = styled('footer')`
  margin: 0;
  padding: ${props => props.theme.dimensions.containerPadding}px;
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

const Footer: React.SFC = () => (
  <Wrapper>
    <Container>
      <Inner>
        <p>&copy; 2018 Kata.ai. All rights reserved.</p>
        <p>Version version. Last updated date.</p>
      </Inner>
    </Container>
  </Wrapper>
);

export default Footer;

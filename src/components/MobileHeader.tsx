import React from 'react';
import styled from 'utils/styled';
import Container from './Container';

interface MobileHeaderProps {
  visible?: boolean;
}

const Wrapper = styled('div')`
  padding: ${props => props.theme.dimensions.containerPadding}px;
  padding-bottom: 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const MobileHeader: React.SFC<MobileHeaderProps> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default MobileHeader;

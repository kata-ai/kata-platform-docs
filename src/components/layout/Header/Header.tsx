import React from 'react';
import styled from 'styled-components';
import { colors, dimensions, layerIndexes } from 'utils/variables';

interface HeaderProps {
  navigation?: boolean;
  absolute?: boolean;
  fixed?: boolean;
}

const Wrapper = styled('header')<HeaderProps>`
  display: flex;
  flex-direction: column;
  position: ${props => (props.fixed ? 'fixed' : props.absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${dimensions.heights.header}px;
  padding: 0;
  background-color: ${props => (props.navigation ? colors.grey01 : colors.white)};
  z-index: ${layerIndexes.stickyNav};
`;

const Header: React.SFC<HeaderProps> = ({ children, absolute, fixed, navigation }) => (
  <Wrapper absolute={absolute} fixed={fixed} navigation={navigation}>
    {children}
  </Wrapper>
);

export default Header;

import React from 'react';
import styled from 'styled-components';

import { NavigationContext } from '../Navigation/NavigationContext';
import { breakpoints, dimensions } from 'utils/variables';

interface LayoutMainInnerProps {
  isNavigationOpen?: boolean;
  navHidden?: boolean;
}

interface LayoutMainProps extends LayoutMainInnerProps {
  className?: string;
}

const StyledLayoutMain = styled('main')<LayoutMainInnerProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  transition: margin-left 0.3s ease;

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: ${props => (props.navHidden ? 0 : dimensions.widths.sidebar.lg)}px;
  }
`;

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, navHidden, className }) => {
  const { state } = React.useContext(NavigationContext);

  return (
    <StyledLayoutMain id="reach-skip-nav" className={className} isNavigationOpen={state.isOpen} navHidden={navHidden}>
      {children}
    </StyledLayoutMain>
  );
};

export default LayoutMain;

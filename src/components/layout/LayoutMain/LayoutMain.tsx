import React from 'react';
import styled from 'styled-components';

import { NavigationContext } from '../Navigation/NavigationContext';
import { breakpoints, dimensions } from 'utils/variables';

interface LayoutMainInnerProps {
  className?: string;
  isNavigationOpen?: boolean;
}

interface LayoutMainProps extends LayoutMainInnerProps {}

const StyledLayoutMain = styled('main')<LayoutMainInnerProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  transition: margin-left 0.3s ease;

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: ${dimensions.widths.sidebar.lg}px;
  }
`;

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => {
  const { state } = React.useContext(NavigationContext);

  return (
    <StyledLayoutMain id="reach-skip-nav" className={className} isNavigationOpen={state.isOpen}>
      {children}
    </StyledLayoutMain>
  );
};

export default LayoutMain;

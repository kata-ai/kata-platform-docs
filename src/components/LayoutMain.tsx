import React from 'react';
import styled from 'utils/styled';

const StyledLayoutMain = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    margin-top: ${props => props.theme.heights.header}px;
  }
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;

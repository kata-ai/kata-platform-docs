import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

interface HeaderInnerProps {
  className?: string;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}

const HideOnMobile = css`
  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

const HideOnDesktop = css`
  @media (min-width: ${breakpoints.lg}px) {
    display: none;
  }
`;

const Wrapper = styled('div')<HeaderInnerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  ${props => props.hideOnMobile && HideOnMobile}
  ${props => props.hideOnDesktop && HideOnDesktop}
`;

const HeaderInner: React.SFC<HeaderInnerProps> = ({ children, className, ...rest }) => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

HeaderInner.defaultProps = {
  className: undefined
};

export default HeaderInner;

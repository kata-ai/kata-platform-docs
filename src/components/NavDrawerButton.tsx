import React from 'react';
import styled, { css } from 'utils/styled';

interface ToggleableProps {
  drawerIsOpen?: boolean;
  floating?: boolean;
}

const Wrapper = styled<ToggleableProps, 'button'>('button')`
  display: inline-block;
  padding: 8px;
  color: ${props => props.theme.colors.brand};
  background: none;
  border: none;
  cursor: pointer;
  z-index: ${props => props.floating && props.theme.zIndex.floatingButton};

  &:hover,
  &:focus {
    outline: none;
  }

  ${props =>
    props.floating &&
    css`
      position: absolute;
      top: 12px;
      right: 32px;
      z-index: ${props.theme.zIndex.floatingButton};
    `}

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Inner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;

  & svg {
    g {
      fill: ${props => (props.drawerIsOpen ? props.theme.colors.white : props.theme.colors.brand)};
    }
  }
`;

interface NavDrawerButtonProps {
  className?: string;
  drawerIsOpen?: boolean;
  floating?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavDrawerButton: React.SFC<NavDrawerButtonProps> = ({
  className,
  drawerIsOpen,
  floating,
  onClick
}) => (
  <Wrapper
    className={className}
    onClick={onClick}
    floating={floating}
    drawerIsOpen={drawerIsOpen}
    aria-label="Toggle Navigation"
  >
    <Inner drawerIsOpen={drawerIsOpen}>
      {drawerIsOpen ? (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <g fill-rule="evenodd">
            <rect
              transform="translate(11.748851, 11.748851) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            {/* tslint:disable:max-line-length */}
            <rect
              transform="translate(11.748851, 11.748851) scale(-1, 1) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            {/* tslint:enable:max-line-length */}
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g>
            <rect x="0" y="0" width="24" height="3" rx="1.5" />
            <rect x="0" y="10.5" width="24" height="3" rx="1.5" />
            <rect x="0" y="21" width="24" height="3" rx="1.5" />
          </g>
        </svg>
      )}
    </Inner>
  </Wrapper>
);

export default NavDrawerButton;

import React from 'react';
import styled from 'utils/styled';
import { brandColors } from 'styles/theme';

interface ToggleableProps {
  drawerIsOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'button'>('button')`
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 0;
  background-color: ${props =>
    props.drawerIsOpen ? props.theme.colors.error : props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  z-index: ${props => props.theme.zIndex.floatingButton};
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Inner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  transition: transform 0.3s ease;
  transform: ${props => (props.drawerIsOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

interface FloatingNavButtonProps {
  className?: string;
  drawerIsOpen?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const FloatingNavButton: React.SFC<FloatingNavButtonProps> = ({
  className,
  drawerIsOpen,
  onClick
}) => (
  <Wrapper className={className} onClick={onClick} drawerIsOpen={drawerIsOpen}>
    <Inner drawerIsOpen={drawerIsOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
        <path
          fill={brandColors.white}
          fillRule="evenodd"
          d="M7 7V1a1 1 0 1 1 2 0v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6z"
        />
      </svg>
    </Inner>
  </Wrapper>
);

export default FloatingNavButton;

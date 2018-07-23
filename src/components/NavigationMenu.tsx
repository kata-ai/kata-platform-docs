import React from 'react';
import Link from 'gatsby-link';
import { transparentize } from 'polished';
import { MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';

interface NavigationMenuProps {
  node: MenuNode;
  menuKey: string;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

interface ToggleableProps {
  isOpen?: boolean;
}

const Root = styled('div')`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ToggleButton = styled<ToggleableProps, 'button'>('button')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 14px 16px;
  border: none;
  border-radius: 6px;
  background: none;
  outline: none;
  font-size: 85%;
  text-align: left;
  box-shadow: ${props =>
    props.isOpen ? props.theme.shadow.layer200 : props.theme.shadow.layer100};
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    padding: 14px 0;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid ${props => transparentize(0.5, props.theme.colors.white)};
    font-size: 20px;
    line-height: 21px;
    color: ${props => props.theme.colors.white};
  }
`;

const ToggleButtonInner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: none;

  & svg {
    g {
      fill: ${props =>
        props.isOpen ? props.theme.colors.black : transparentize(0.5, props.theme.colors.black)};

      @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
        fill: ${props =>
          props.isOpen ? props.theme.colors.white : transparentize(0.5, props.theme.colors.white)};
      }
    }
  }
`;

const ToggleButtonSpan = styled<ToggleableProps, 'span'>('span')`
  flex: 1 1 auto;
  font-weight: 500;
  color: ${props =>
    props.isOpen ? props.theme.colors.black : transparentize(0.5, props.theme.colors.black)};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    color: ${props =>
      props.isOpen ? props.theme.colors.white : transparentize(0.5, props.theme.colors.white)};
  }
`;

const ToggleMenu = styled<ToggleableProps, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

const ToggleMenuList = styled('li')`
  margin: 8px 0;
  font-size: 85%;
  color: ${props => props.theme.colors.gray.calm};
`;

const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 3px 16px;
  border-radius: 4px;
  color: ${props => props.theme.colors.gray.calm};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.brand};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.brand};
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    color: ${props => transparentize(0.5, props.theme.colors.white)};

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.white};
      background: none;
    }

    &.active {
      color: ${props => props.theme.colors.white};
    }
  }
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, ToggleableProps> {
  render() {
    const { node, onCloseNavMenu, onClick, isOpen } = this.props;

    return (
      <Root>
        <ToggleButton onClick={onClick} isOpen={isOpen} aria-label={node.title}>
          <ToggleButtonInner isOpen={isOpen}>
            <ToggleButtonSpan isOpen={isOpen}>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="6px"
                viewBox="0 0 10 6"
                version="1.1"
              >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path
                    d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025"
                    transform="translate(5.000250, 3.000125) scale(1, -1) translate(-5.000250, -3.000125) "
                  />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px" viewBox="0 0 10 6">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025" />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            )}
          </ToggleButtonInner>
        </ToggleButton>
        <ToggleMenu isOpen={isOpen}>
          {node.items.map(item => (
            <ToggleMenuList key={item.id}>
              <ToggleMenuListLink to={item.slug} activeClassName="active" onClick={onCloseNavMenu}>
                {item.title}
              </ToggleMenuListLink>
            </ToggleMenuList>
          ))}
        </ToggleMenu>
      </Root>
    );
  }
}

export default NavigationMenu;

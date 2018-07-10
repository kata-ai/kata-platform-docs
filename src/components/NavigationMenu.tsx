import React from 'react';
import Link from 'gatsby-link';
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
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  transition: all 0.3s ease;
`;

const ToggleButtonInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToggleButtonSpan = styled('span')`
  flex: 1 1 auto;
  font-weight: 500;
`;

const ToggleMenu = styled<ToggleableProps, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
  transition: all 0.3s ease;
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
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, ToggleableProps> {
  render() {
    const { node, onCloseNavMenu, onClick, isOpen } = this.props;

    return (
      <Root>
        <ToggleButton onClick={onClick} isOpen={isOpen}>
          <ToggleButtonInner>
            <ToggleButtonSpan>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <img src={require('assets/images/arrow-up.svg')} />
            ) : (
              <img src={require('assets/images/arrow-down.svg')} />
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

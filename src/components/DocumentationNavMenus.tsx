import React from 'react';
import styled from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import NavigationMenu from './NavigationMenu';
import { ToggleableProps } from 'interfaces/app';

interface Props extends ToggleableProps {
  navigation?: Array<{ node: MenuNode }>;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  activeMenuKey?: string;
}

class DocumentationNavMenus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeMenuKey: undefined
    };
  }

  onNavMenuClick(activeMenuKey: string) {
    this.setState(prevState => {
      if (prevState.activeMenuKey === activeMenuKey) {
        return {
          activeMenuKey: undefined
        };
      }

      return { activeMenuKey };
    });
  }

  render() {
    const { navigation, isOpen, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={isOpen}>
        {navigation &&
          navigation.map(({ node }) => (
            <NavigationMenu
              key={node.title}
              menuKey={node.title}
              node={node}
              isOpen={this.state.activeMenuKey === node.title}
              onClick={() => this.onNavMenuClick(node.title)}
              onCloseNavMenu={onCloseNavMenu}
            />
          ))}
      </Wrapper>
    );
  }
}

export default DocumentationNavMenus;

const Wrapper = styled<ToggleableProps, 'div'>('div')`
  /* The values below look arbitrary, but necessary to prevent weird height stuff happening. */
  margin-top: ${props => (props.isOpen ? `${props.theme.heights.header}px` : '24px')};
  padding: 48px ${props => props.theme.dimensions.containerPadding}px;
  transition: max-height 0.3s ease;
  height: 100%;
  max-height: ${props => `calc(100vh - ${props.theme.heights.header}px)`};

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin-top: 0;
    padding: 0 24px 48px;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    padding-top: 24px;
    overflow-y: auto;
  }
`;

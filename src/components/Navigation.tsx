import React from 'react';
import Link from 'gatsby-link';

import styled from 'utils/styled';
import Container from './Container';
import { MenuNode } from 'interfaces/nodes';
import DocumentationNavMenus from './DocumentationNavMenus';
import Logo from './Logo';
import NavDrawerButton from './NavDrawerButton';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'header'>('header')`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.drawer.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: ${props => props.theme.zIndex.drawer};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.theme.heights.header}px;
    flex-direction: column;
    padding: 12px ${props => props.theme.dimensions.containerPadding}px;
    overflow-y: auto;
    pointer-events: auto;
    // transform: translate(${props => (props.isOpen ? '0' : '-100%')}, 0);
    transition: transform 0.3s ease;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }
`;

const WrapperInner = styled('div')`
  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    position: fixed;
    width: ${props => props.theme.widths.drawer.lg - 1}px;
    flex: 1 1 auto;
    z-index: 2;
    height: 100vh;
    overflow-y: auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TitleInner = styled('div')`
  padding: 0;
  color: ${props => props.theme.colors.gray.copy};

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding: ${props => props.theme.dimensions.containerPaddingLg}px 40px;
  }
`;

const TitleInnerContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-direction: column;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    align-items: flex-end;
  }
`;

const HomepageLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.heading};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Subtitle = styled('p')`
  margin-top: 16px;
  margin-bottom: 0;
  color: ${props => props.theme.colors.gray.calm};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    margin-left: 8px;
    line-height: 20px;
  }
`;

const DocumentationNav = styled<ToggleableProps, 'nav'>('nav')`
  display: flex;
  flex-direction: column;
  transition: visibility 0.3s ease, opacity 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    background-color: ${props => props.theme.colors.brand};
    z-index: ${props => props.theme.zIndex.floatingButton + 5};
  }
`;

interface HeaderProps {
  title: string;
  subtitle?: string;
  navigation?: Array<{ node: MenuNode }>;
  open?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  toggleDrawer?: () => void;
  toggleToc?: () => void;
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { title, subtitle, navigation, open, onCloseNavMenu, toggleDrawer } = this.props;

    return (
      <Wrapper>
        <WrapperInner>
          <TitleInner>
            <TitleInnerContainer>
              <HomepageLink to="/" href="/" onClick={onCloseNavMenu}>
                <Logo src={require('assets/images/logo-platform.png')} alt={title} />
              </HomepageLink>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </TitleInnerContainer>
          </TitleInner>
          <DocumentationNav isOpen={open}>
            <NavDrawerButton onClick={toggleDrawer} floating={open} drawerIsOpen={open} />
            <DocumentationNavMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
          </DocumentationNav>
          <NavDrawerButton onClick={toggleDrawer} floating={open} drawerIsOpen={open} />
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Header;

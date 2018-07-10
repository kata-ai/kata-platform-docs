import React from 'react';
import Link from 'gatsby-link';

import styled from 'utils/styled';
import Container from './Container';
import { MenuNode } from 'interfaces/nodes';
import DocumentationNavMenus from './DocumentationNavMenus';
import Logo from './Logo';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'header'>('header')`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.drawer.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: ${props => props.theme.zIndex.drawer};

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: ${props => props.theme.widths.drawer.lg}px;
    height: 100vh;
    padding-bottom: 5rem;
    overflow-y: auto;
    pointer-events: auto;
    transform: translate(${props => (props.isOpen ? '0' : '-100%')}, 0);
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
`;

const TitleInner = styled('div')`
  padding: 48px 40px;
  color: ${props => props.theme.colors.gray.copy};
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
`;

const DocumentationNav = styled('nav')`
  display: flex;
  flex-direction: column;
`;

interface HeaderProps {
  title: string;
  subtitle?: string;
  navigation?: Array<{ node: MenuNode }>;
  open?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { title, subtitle, navigation, open, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={open}>
        <WrapperInner>
          <TitleInner>
            <Container>
              <HomepageLink to="/" href="/" onClick={onCloseNavMenu}>
                <Logo src={require('assets/images/logo-platform.png')} alt={title} height={24} />
              </HomepageLink>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </Container>
          </TitleInner>
          <DocumentationNav>
            <DocumentationNavMenus navigation={navigation} onCloseNavMenu={onCloseNavMenu} />
          </DocumentationNav>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Header;

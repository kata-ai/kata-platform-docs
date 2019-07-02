import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { SkipNavLink } from '@reach/skip-nav';

import { Header, HeaderInner, HeaderRight, HeaderLogo } from '../Header';
import { NavButton } from '../Navigation';
import { NavigationContext, NavigationActionTypes } from '../Navigation/NavigationContext';
import { determineFontDimensions } from 'components/foundations';

import { SiteMetadata } from 'interfaces/gatsby';
import { breakpoints, colors, textSizes } from 'utils/variables';
import { isActive } from 'utils/helpers';
import { Edge, HeaderMenuItem } from 'interfaces/nodes';

import logo from 'assets/images/logo-docs.svg';
import { ButtonStyles } from 'components/ui/Button';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SearchBox from 'components/search/SearchBox';
import SearchIcon from '../Header/SearchIcon';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 24px;
`;

const DocumentationMenu = styled('nav')`
  display: flex;
  flex-direction: row;

  a {
    padding: 8px 0;
    color: ${colors.grey07};
    font-size: ${textSizes[300].fontSize}px;
    line-height: ${textSizes[300].lineHeight}px;
    font-weight: 600;

    &:hover,
    &:focus,
    &.active {
      color: ${colors.blue07};
      text-decoration: none;
      outline: none;
    }

    &:not(:first-child) {
      margin-left: 24px;
    }
  }
`;

const HomepageLink = styled(Link)<FontSizeProps>`
  color: ${colors.grey09};
  font-size: ${props => props.size.fontSize};
  line-height: ${props => props.size.lineHeight};
  font-weight: ${props => props.size.fontWeight};

  &:hover,
  &:focus {
    color: ${colors.grey09};
    text-decoration: none;
  }
`;

const LoginButton = styled(OutboundLink)`
  ${ButtonStyles}
`;

const DesktopHeaderRight = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface FontSizeProps {
  size: ReturnType<typeof determineFontDimensions>;
}

interface LayoutRootProps {
  className?: string;
  location?: WindowLocation;
  title: string;
  headerMenus?: Edge<HeaderMenuItem>[];
  navHidden?: boolean;
}

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className, location, title, headerMenus, navHidden }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { dispatch } = React.useContext(NavigationContext);
  const data: DataProps = useStaticQuery(query);
  const { siteMetadata } = data.site;

  return (
    <StyledLayoutRoot className={className}>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`} />
      </Helmet>
      <SkipNavLink />

      <Header fixed>
        <HeaderInner>
          <HeaderLogo navHidden={navHidden}>
            <HomepageLink
              to="/"
              size={determineFontDimensions('heading', 400)}
              onClick={() => dispatch({ type: NavigationActionTypes.CLOSE_DRAWER })}
            >
              <img src={logo} alt={title} />
            </HomepageLink>
          </HeaderLogo>
          <HeaderRight hideOnDesktop>
            <NavButton
              icon="hamburger"
              fill={colors.grey05}
              onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
            >
              Toggle Drawer
            </NavButton>
            <LogoWrapper>
              <HomepageLink
                to="/"
                size={determineFontDimensions('heading', 400)}
                onClick={() => dispatch({ type: NavigationActionTypes.CLOSE_DRAWER })}
              >
                <img src={logo} alt={title} />
              </HomepageLink>
            </LogoWrapper>
            {isSearchOpen ? (
              <SearchBox layout="mobile" onSearchClear={() => setIsSearchOpen(false)} />
            ) : (
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <SearchIcon />
              </button>
            )}
          </HeaderRight>
          <HeaderRight hideOnMobile>
            <DocumentationMenu>
              {headerMenus &&
                headerMenus.map(({ node }) => {
                  if (node.external) {
                    return (
                      <a key={node.id} href={node.href} target="_blank" rel="noopener noreferrer">
                        {node.label}
                      </a>
                    );
                  }

                  return (
                    <Link key={node.id} getProps={isActive(node.exact)} to={node.href}>
                      {node.label}
                    </Link>
                  );
                })}
            </DocumentationMenu>
            <DesktopHeaderRight>
              <SearchBox layout="desktop" />
              <LoginButton
                variant="primary"
                size={'md' as any}
                href="https://platform.kata.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </LoginButton>
            </DesktopHeaderRight>
          </HeaderRight>
        </HeaderInner>
      </Header>
      {children}
    </StyledLayoutRoot>
  );
};

export default LayoutRoot;

const query = graphql`
  query LayoutRootQuery {
    site {
      siteMetadata {
        title
        sidebarTitle
        description
        siteUrl
        keywords
        author {
          name
          url
          email
        }
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery, Link } from 'gatsby';
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

interface FontSizeProps {
  size: ReturnType<typeof determineFontDimensions>;
}

interface LayoutRootProps {
  className?: string;
  location?: WindowLocation;
  title: string;
  headerMenus?: Edge<HeaderMenuItem>[];
}

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className, location, title, headerMenus }) => {
  const { dispatch } = React.useContext(NavigationContext);

  return (
    <StaticQuery query={query}>
      {(data: DataProps) => {
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
              <HeaderInner hideOnDesktop>
                <HeaderRight>
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
                </HeaderRight>
              </HeaderInner>
              <HeaderInner hideOnMobile>
                <HeaderLogo>
                  <HomepageLink
                    to="/"
                    size={determineFontDimensions('heading', 400)}
                    onClick={() => dispatch({ type: NavigationActionTypes.CLOSE_DRAWER })}
                  >
                    <img src={logo} alt={title} />
                  </HomepageLink>
                </HeaderLogo>
                <HeaderRight>
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
                </HeaderRight>
              </HeaderInner>
            </Header>
            {children}
          </StyledLayoutRoot>
        );
      }}
    </StaticQuery>
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

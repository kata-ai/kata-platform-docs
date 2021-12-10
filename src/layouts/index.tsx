import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';

import { AksaraReset } from 'components/foundations';
import { LayoutRoot } from 'components/layout/LayoutRoot';
import { LayoutMain } from 'components/layout/LayoutMain';
import { Navigation } from 'components/layout/Navigation';
import { Overlay } from 'components/layout/Overlay';

import { MenuNode, Edge, HeaderMenuItem } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import 'typeface-inter';
import { NavigationContextProvider } from 'components/layout/Navigation/NavigationContext';

interface IndexLayoutProps {
  location?: WindowLocation;
  navHidden?: boolean;
}

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
  navigationMenus: {
    edges: Edge<MenuNode>[];
  };
  omnichatNavigationMenus: {
    edges: Edge<MenuNode>[];
  };
  businessDashboardMenus: {
    edges: Edge<MenuNode>[];
  };
  qiosMenus: {
    edges: Edge<MenuNode>[];
  };
  headerMenus: {
    edges: Edge<HeaderMenuItem>[];
  };
}

const query = graphql`
  query IndexLayoutQuery {
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
    navigationMenus: allTocJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
    omnichatNavigationMenus: allTocOmnichatJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
    businessDashboardMenus: allTocBusinessDashboardJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
    qiosMenus: allTocQiosJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
    headerMenus: allMenuJson {
      edges {
        node {
          id
          label
          href
          exact
          new
          external
        }
      }
    }
  }
`;

const IndexLayout: React.FC<IndexLayoutProps> = ({ location, children, navHidden }) => {
  const { site, headerMenus, navigationMenus, omnichatNavigationMenus, businessDashboardMenus, qiosMenus }: DataProps =
    useStaticQuery(query);
  const [section, setSection] = React.useState<Edge<MenuNode>[]>(navigationMenus.edges);
  const { siteMetadata } = site;

  React.useEffect(() => {
    if (window) {
      const pathname = window.location.pathname;
      if (pathname.includes('kata-omnichat')) {
        setSection(omnichatNavigationMenus.edges);
      } else if (pathname.includes('business-dashboard')) {
        setSection(businessDashboardMenus.edges);
      } else if (pathname.includes('qios')) {
        setSection(qiosMenus.edges);
      } else {
        setSection(navigationMenus.edges);
      }
    }
  }, [section]);

  return (
    <NavigationContextProvider>
      <AksaraReset>
        <LayoutRoot
          title={siteMetadata.sidebarTitle || siteMetadata.title}
          headerMenus={headerMenus.edges}
          navHidden={navHidden}
        >
          <Helmet>
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={siteMetadata.description} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`} />
          </Helmet>
          <Overlay />
          <Navigation navigation={section} headerMenus={headerMenus.edges} navHidden={navHidden} />
          <LayoutMain navHidden={navHidden}>{children}</LayoutMain>
        </LayoutRoot>
      </AksaraReset>
    </NavigationContextProvider>
  );
};

export default IndexLayout;

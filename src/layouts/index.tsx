import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import Navigation from '../components/Navigation';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import theme from '../styles/theme';
import { ThemeProvider } from '../utils/styled';
import { MenuNode } from '../interfaces/nodes';
import { SiteMetadata } from '../interfaces/gatsby';

import '../assets/fonts/museo-sans-rounded.css';
import '../assets/fonts/league-mono.css';
import '../styles/globals';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';

interface WrapperProps extends RouteComponentProps<{}> {}

interface WrapperState {
  drawerIsOpen: boolean;
}

interface QueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
  navigationMenus: {
    edges: Array<{
      node: MenuNode;
    }>;
  };
}

class IndexLayout extends React.Component<WrapperProps, WrapperState> {
  constructor(props: WrapperProps) {
    super(props);

    this.state = {
      drawerIsOpen: false
    };
  }

  render() {
    const { children, location } = this.props;
    const { drawerIsOpen } = this.state;

    return (
      <StaticQuery query={query}>
        {(data: QueryData) => {
          const { siteMetadata } = data.site;

          return (
            <ThemeProvider theme={theme}>
              <LayoutRoot>
                <Helmet>
                  <title>{siteMetadata.title}</title>
                  <meta name="description" content={siteMetadata.description} />
                  <meta name="keywords" content={siteMetadata.keywords} />
                  <meta property="og:type" content="website" />
                  <meta property="og:site_name" content={siteMetadata.title} />
                  <meta property="og:description" content={siteMetadata.description} />
                  <meta
                    property="og:url"
                    content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`}
                  />
                </Helmet>
                <Navigation
                  title={siteMetadata.sidebarTitle || siteMetadata.title}
                  subtitle={siteMetadata.sidebarSubtext}
                  navigation={data.navigationMenus.edges}
                  open={drawerIsOpen}
                  onCloseNavMenu={this.closeDrawer}
                  toggleDrawer={this.toggleDrawer}
                />
                <LayoutMain>{children}</LayoutMain>
              </LayoutRoot>
            </ThemeProvider>
          );
        }}
      </StaticQuery>
    );
  }

  private toggleDrawer = () => {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
  };

  private closeDrawer = () => {
    this.setState({ drawerIsOpen: false });
  };
}

export default IndexLayout;

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        sidebarTitle
        sidebarSubtext
        siteLastUpdated
        description
        version
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
  }
`;

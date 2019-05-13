import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Page from '../components/Page';

import theme from '../styles/theme';
import { SiteMetadata } from '../interfaces/gatsby';
import { ThemeProvider } from '../utils/styled';
import SearchBox from '../components/SearchBox';
import DocsWrapper from '../components/DocsWrapper';
import Container from '../components/Container';
import DocsHeader from '../components/docs/DocsHeader';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

// FIXME: ThemeProvider is required because for some reason the 404 page doesn't mount
// the <Layout /> component. This will be fixed when we got the time to upgrade to Gatsby v2
const SearchPage: React.SFC<Props> = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Helmet>
        <title>Search &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <DocsWrapper>
        <Container>
          <DocsHeader>
            <h1>Search</h1>
          </DocsHeader>
          <SearchBox />
        </Container>
      </DocsWrapper>
    </Page>
  </ThemeProvider>
);

export default SearchPage;

export const query = graphql`
  query SearchPageQuery {
    site {
      siteMetadata {
        title
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

import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { SiteMetadata } from '../interfaces/gatsby';
import SearchBox from '../components/search/SearchBox';
import IndexLayout from 'layouts';
import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { Container } from 'components/layout/Container';
import { DocsHeader } from 'components/docs/DocsHeader';

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
  <IndexLayout>
    <Page docsPage>
      <Helmet>
        <title>Search &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <DocsWrapper>
        <Container>
          <DocsHeader title="Search" />
          <SearchBox />
        </Container>
      </DocsWrapper>
    </Page>
  </IndexLayout>
);

export default SearchPage;

export const query = graphql`
  query SearchPageQuery {
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
        socials {
          name
          imgpath
          url
        }
      }
    }
  }
`;

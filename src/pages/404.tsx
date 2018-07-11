import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'utils/styled';

import Page from 'components/Page';
import NotFoundWrapper from 'components/NotFoundWrapper';
import { SiteMetadata } from 'interfaces/gatsby';
import theme from 'styles/theme';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

// FIXME: ThemeProvider is required because for some reason the 404 page doesn't mount
// the <Layout /> component. This will be fixed when we got the time to upgrade to Gatsby v2
const NotFoundPage: React.SFC<Props> = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Helmet>
        <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <NotFoundWrapper>
        <Inner>
          <Title>404</Title>
          <Body>We can't find the page you're looking for.</Body>
          <Body>
            <Link to="/" href="/">
              Go back?
            </Link>
          </Body>
        </Inner>
      </NotFoundWrapper>
    </Page>
  </ThemeProvider>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
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

const Inner = styled('div')`
  text-align: center;
`;

const Title = styled('h1')`
  font-size: 5rem;
  margin: 0;
  color: ${props => props.theme.colors.gray.calm};
`;

const Body = styled('p')`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.gray.calm};
`;

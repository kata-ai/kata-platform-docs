import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { SiteMetadata } from '../interfaces/gatsby';
import IndexLayout from 'layouts';
import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { Container } from 'components/layout/Container';
import { DocsHeader } from 'components/docs/DocsHeader';
import { MarkdownContent } from 'components/page/Markdown';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

// FIXME: ThemeProvider is required because for some reason the 404 page doesn't mount
// the <Layout /> component. This will be fixed when we got the time to upgrade to Gatsby v2
const TutorialPage: React.SFC<Props> = ({ data }) => (
  <IndexLayout navHidden>
    <Page docsPage>
      <Helmet>
        <title>Search &middot; {data.site.siteMetadata.title}</title>
      </Helmet>
      <DocsWrapper>
        <Container>
          <DocsHeader title="Tutorial" subtitle="A list of tutorials for using Kata Platform." />
          <MarkdownContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores in hic optio maxime! Mollitia iusto
              suscipit voluptates magnam doloremque, praesentium enim eos repellendus, exercitationem quod illo hic
              maxime neque quas.
            </p>
          </MarkdownContent>
        </Container>
      </DocsWrapper>
    </Page>
  </IndexLayout>
);

export default TutorialPage;

export const query = graphql`
  query TutorialPageQuery {
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

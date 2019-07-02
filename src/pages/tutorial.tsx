import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import { SiteMetadata } from '../interfaces/gatsby';
import IndexLayout from 'layouts';
import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { Container } from 'components/layout/Container';
import { DocsHeader } from 'components/docs/DocsHeader';
import { MarkdownContent } from 'components/page/Markdown';
import styled from 'styled-components';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const TutorialCard = styled(Link)`
  /**/
`;

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
            <TutorialCard to="/tutorial/">
              <h2>Creating a simple Hello World chatbot</h2>
              <p>This is a quick start how to build a 'Hello World' chatbot.</p>
              <p>link</p>
            </TutorialCard>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi perferendis nihil quos, dignissimos
              distinctio, eos, corporis minus cupiditate ratione delectus accusamus enim molestiae atque! Provident
              accusantium esse asperiores molestias?
            </p>
            <p>
              Ut, tempore explicabo quod omnis accusamus esse soluta dolores hic, impedit cum repudiandae architecto,
              consectetur numquam magni? Explicabo quas odit alias molestiae hic itaque, tempora facere asperiores iste
              ad non.
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

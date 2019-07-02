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
import { Heading, Paragraph } from 'components/foundations';
import { space, colors } from 'utils/variables';
import { DocsContribution } from 'components/docs/DocsContribution';
import { FooterWrapper, Footer } from 'components/layout/Footer';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const TutorialCard = styled(Link)`
  display: block;
  padding: ${space.lg}px 0;
  color: inherit;
  border-top: 1px solid ${colors.grey02};

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const TutorialPage: React.SFC<Props> = ({ data }) => {
  const { site } = data;
  const { siteMetadata } = site;

  return (
    <IndexLayout navHidden>
      <Page docsPage>
        <Helmet>
          <title>Search &middot; {data.site.siteMetadata.title}</title>
        </Helmet>
        <DocsWrapper>
          <Container>
            <DocsHeader title="Tutorial" subtitle="A list of tutorials for using Kata Platform." />
            <MarkdownContent>
              <TutorialCard to="/tutorial/hello-world">
                <Heading size={600} mb="sm">
                  Creating a simple Hello World chatbot
                </Heading>
                <Paragraph>
                  Building a chatbot on Kata | Platform is quick and easy, even with a lack of programming knowledge. In
                  this tutorial, we will learn how to create a simple bot that says "Hello World" when you message it.
                </Paragraph>
              </TutorialCard>
              <TutorialCard to="/tutorial/bot-studio">
                <Heading size={600} mb="sm">
                  Creating a Pizza Ordering Bot with LINE
                </Heading>
                <Paragraph>
                  In this tutorial, we will learn how to create a simple bot on LINE Messenger to order a pizza. We will
                  also learn how to train your bot with NL Studio.
                </Paragraph>
              </TutorialCard>
              <TutorialCard to="/tutorial/nl-studio">
                <Heading size={600} mb="sm">
                  Enhancing Chatbot with NL Studio
                </Heading>
                <Paragraph>
                  In Bot studio tutorial, we learned how to make keyword-based chatbot to order pizza. However,
                  keyword-based chatbot is not so smart. In this tutorial we will learn how to enhance the chatbot using
                  NL Studio.
                </Paragraph>
              </TutorialCard>
              <TutorialCard to="/tutorial/integration-chatbot-with-nl-studio">
                <Heading size={600} mb="sm">
                  Integrating with NL Studio
                </Heading>
                <Paragraph>
                  In this tutorial, we will integrate the pizza ordering bot we just created with NL Studio.
                </Paragraph>
              </TutorialCard>
            </MarkdownContent>
            <DocsContribution />
            <FooterWrapper>
              <Footer
                version={siteMetadata.version}
                siteLastUpdated={siteMetadata.siteLastUpdated}
                socials={siteMetadata.socials}
              />
            </FooterWrapper>
          </Container>
        </DocsWrapper>
      </Page>
    </IndexLayout>
  );
};

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

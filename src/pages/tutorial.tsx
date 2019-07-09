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
import { space, colors, breakpoints } from 'utils/variables';
import { DocsContribution } from 'components/docs/DocsContribution';
import { FooterWrapper, Footer } from 'components/layout/Footer';

import illustration1 from 'assets/images/tutorials/spot-hello-world.svg';
import illustration2 from 'assets/images/tutorials/spot-cms.svg';
import illustration3 from 'assets/images/tutorials/spot-nl-studio.svg';
import illustration4 from 'assets/images/tutorials/spot-nl-studio-integration.svg';

interface Props {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const TutorialCard = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: ${space.lg}px 0;
  color: inherit;
  border-top: 1px solid ${colors.grey02};

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
    background-color: ${colors.grey01};
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const TutorialCardImage = styled('div')`
  flex: 1 0 60px;

  img {
    width: 100%;
    max-width: 60px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex: 1 0 88px;

    img {
      max-width: 88px;
    }
  }
`;

const TutorialCardContent = styled('div')`
  width: 100%;
  flex: 1 1 auto;

  &:not(:first-child) {
    margin-left: 24px;

    @media (min-width: ${breakpoints.lg}px) {
      margin-left: 32px;
    }
  }
`;

const TutorialPage: React.SFC<Props> = ({ data }) => {
  const { site } = data;
  const { siteMetadata } = site;

  return (
    <IndexLayout navHidden>
      <Page docsPage>
        <Helmet>
          <title>Tutorial &middot; {data.site.siteMetadata.title}</title>
        </Helmet>
        <DocsWrapper>
          <Container>
            <DocsHeader title="Tutorial" subtitle="A list of tutorials for using Kata Platform." />
            <MarkdownContent>
              <TutorialCard to="/tutorial/hello-world">
                <TutorialCardImage>
                  <img src={illustration1} alt="" />
                </TutorialCardImage>
                <TutorialCardContent>
                  <Heading size={600} mb="sm">
                    Creating a Simple Hello World Chatbot
                  </Heading>
                  <Paragraph>
                    Building a chatbot on Kata | Platform is quick and easy, even with a lack of programming knowledge.
                    In this tutorial, we will learn how to create a simple bot that says "Hello World" when you message
                    it.
                  </Paragraph>
                </TutorialCardContent>
              </TutorialCard>
              <TutorialCard to="/tutorial/bot-studio">
                <TutorialCardImage>
                  <img src={illustration2} alt="" />
                </TutorialCardImage>
                <TutorialCardContent>
                  <Heading size={600} mb="sm">
                    Creating a Pizza Ordering Bot with LINE
                  </Heading>
                  <Paragraph>
                    In this tutorial, we will learn how to create a simple bot on LINE Messenger to order a pizza. We
                    will also learn how to train your bot with NL Studio.
                  </Paragraph>
                </TutorialCardContent>
              </TutorialCard>
              <TutorialCard to="/tutorial/nl-studio">
                <TutorialCardImage>
                  <img src={illustration3} alt="" />
                </TutorialCardImage>
                <TutorialCardContent>
                  <Heading size={600} mb="sm">
                    Enhancing Chatbot with NL Studio
                  </Heading>
                  <Paragraph>
                    In Bot studio tutorial, we learned how to make keyword-based chatbot to order pizza. However,
                    keyword-based chatbot is not so smart. In this tutorial we will learn how to enhance the chatbot
                    using NL Studio.
                  </Paragraph>
                </TutorialCardContent>
              </TutorialCard>
              <TutorialCard to="/tutorial/integration-chatbot-with-nl-studio">
                <TutorialCardImage>
                  <img src={illustration4} alt="" />
                </TutorialCardImage>
                <TutorialCardContent>
                  <Heading size={600} mb="sm">
                    Integrating with NL Studio
                  </Heading>
                  <Paragraph>
                    In this tutorial, we will integrate the pizza ordering bot we just created with NL Studio.
                  </Paragraph>
                </TutorialCardContent>
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

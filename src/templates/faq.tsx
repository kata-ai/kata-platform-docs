import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import { Page } from 'components/layout/Page';

import { Container } from 'components/layout/Container';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';
import MarkdownContent from 'components/page/Markdown/MarkdownContent';

import { MenuNode, Edge } from 'interfaces/nodes';
import { Footer, FooterWrapper } from 'components/layout/Footer';
import IndexLayout from 'layouts';
import renderAst from 'utils/renderAst';
import { SiteMetadata } from 'interfaces/gatsby';
import { DocsContribution } from 'components/docs/DocsContribution';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    sectionList: {
      edges: Edge<MenuNode>[];
    };
    markdownRemark: {
      htmlAst: any;
      excerpt: string;
      frontmatter: {
        id: string;
        title: string;
        description?: string;
        prev?: string;
        next?: string;
      };
    };
  };
}

const FAQTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const { markdownRemark, site } = data;
  const { frontmatter } = markdownRemark;
  const { siteMetadata } = site;

  return (
    <IndexLayout navHidden>
      <Page docsPage>
        <Helmet>
          <title>
            {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
          </title>
          <meta name="description" content={markdownRemark.excerpt} />
          <meta property="og:title" content={markdownRemark.frontmatter.title} />
          <meta property="og:description" content={markdownRemark.excerpt} />
        </Helmet>
        <DocsWrapper>
          <Container>
            <DocsHeader title={frontmatter.title} subtitle={frontmatter.description} />
            <MarkdownContent>{renderAst(markdownRemark.htmlAst)}</MarkdownContent>
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

export default FAQTemplate;

export const query = graphql`
  query FAQTemplateQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      frontmatter {
        id
        title
        description
        prev
        next
      }
    }
  }
`;

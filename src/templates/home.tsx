import React from 'react';
import { Helmet } from 'react-helmet';

import Page from 'components/Page';
import Container from 'components/Container';
import { MenuNode } from 'interfaces/nodes';
import MarkdownContent from 'components/MarkdownContent';
import DocsWrapper from 'components/DocsWrapper';
import DocsHeader from 'components/DocsHeader';
import TocWrapper from 'components/TocWrapper';
import styled from 'utils/styled';
import Footer from 'components/Footer';
import { SiteMetadata } from 'interfaces/gatsby';
import DocsContribution from 'components/DocsContribution';

interface HomepageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    sectionList: {
      edges: Array<{
        node: MenuNode;
      }>;
    };
    markdownRemark: {
      html: string;
      tableOfContents: string;
      excerpt: string;
      frontmatter: {
        id: string;
        title: string;
        prev?: string;
        next?: string;
      };
    };
  };
}

interface HomepageTemplateState {
  tocIsOpen: boolean;
}

class HomepageTemplate extends React.Component<HomepageTemplateProps, HomepageTemplateState> {
  constructor(props: HomepageTemplateProps) {
    super(props);

    this.state = {
      tocIsOpen: false
    };
  }

  render() {
    const { markdownRemark, site } = this.props.data;
    const { siteMetadata } = site;

    return (
      <Page docsPage>
        <Helmet>
          <title>{siteMetadata.title}</title>
          <meta property="og:title" content="Home" />
        </Helmet>
        <DocsWrapper hasToc={!!markdownRemark.tableOfContents}>
          {markdownRemark.tableOfContents && (
            <TocWrapper
              isOpen={this.state.tocIsOpen}
              onClick={this.toggleToc}
              dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }}
            />
          )}
          <Container>
            <DocsHeader>
              <h1>
                {markdownRemark.frontmatter.title !== 'Home'
                  ? markdownRemark.frontmatter.title
                  : siteMetadata.title}
              </h1>
            </DocsHeader>
            <MarkdownContent html={markdownRemark.html} />
            <FooterWrapper>
              <DocsContribution />
              <Footer
                version={siteMetadata.version}
                siteLastUpdated={siteMetadata.siteLastUpdated}
                socials={siteMetadata.socials}
              />
            </FooterWrapper>
          </Container>
        </DocsWrapper>
      </Page>
    );
  }

  private toggleToc = () => {
    this.setState({ tocIsOpen: !this.state.tocIsOpen });
  };
}

export default HomepageTemplate;

export const query = graphql`
  query HomeTemplateQuery($slug: String!) {
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
      html
      excerpt
      frontmatter {
        id
        title
        prev
        next
      }
    }
  }
`;

const FooterWrapper = styled('div')`
  margin-top: 40px;
  padding: 0;
`;

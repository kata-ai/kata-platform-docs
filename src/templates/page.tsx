import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Page from '../components/Page';
import Container from '../components/Container';
import MarkdownContent from '../components/MarkdownContent';
import DocsWrapper from '../components/DocsWrapper';
import DocsHeader from '../components/DocsHeader';
import Pagination from '../components/Pagination';
import TocWrapper from '../components/TocWrapper';
import Footer from '../components/Footer';
import TocFloatingButton from '../components/TocFloatingButton';
import DocsContribution from '../components/DocsContribution';
import SearchWrapper from '../components/SearchWrapper';

import { MenuNode } from '../interfaces/nodes';
import { SiteMetadata } from '../interfaces/gatsby';

import getPageById from '../utils/getPageById';
import styled from '../utils/styled';

interface PageTemplateProps {
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
        description: string;
        prev?: string;
        next?: string;
      };
    };
  };
}

interface PageTemplateState {
  tocIsOpen: boolean;
}

class PageTemplate extends React.Component<PageTemplateProps, PageTemplateState> {
  constructor(props: PageTemplateProps) {
    super(props);

    this.state = {
      tocIsOpen: false
    };
  }

  public render() {
    const { markdownRemark, sectionList, site } = this.props.data;
    const { siteMetadata } = site;
    const { prev, next } = markdownRemark.frontmatter;
    const prevPage = getPageById(sectionList.edges, prev);
    const nextPage = getPageById(sectionList.edges, next);

    return (
      <Page docsPage>
        <Helmet>
          <title>
            {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
          </title>
          <meta
            name="description"
            content={markdownRemark.frontmatter.description || markdownRemark.excerpt}
          />
          <meta property="og:title" content={markdownRemark.frontmatter.title} />
          <meta
            property="og:description"
            content={markdownRemark.frontmatter.description || markdownRemark.excerpt}
          />
        </Helmet>
        <SearchWrapper>
          <Container xl>
            <Link to="/search">Search in docs...</Link>
          </Container>
        </SearchWrapper>
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
              <h1>{markdownRemark.frontmatter.title}</h1>
            </DocsHeader>
            <MarkdownContent html={markdownRemark.html} />
            <FooterWrapper>
              <DocsContribution />
              <Container>
                {(prevPage || nextPage) && <Pagination prevPage={prevPage} nextPage={nextPage} />}
              </Container>
              <Footer
                version={siteMetadata.version}
                siteLastUpdated={siteMetadata.siteLastUpdated}
                socials={siteMetadata.socials}
              />
            </FooterWrapper>
          </Container>
          <TocFloatingButton tocIsOpen={this.state.tocIsOpen} onClick={this.toggleToc} />
        </DocsWrapper>
      </Page>
    );
  }

  private toggleToc = () => {
    this.setState({ tocIsOpen: !this.state.tocIsOpen });
  };
}

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
    sectionList: allTocJson {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
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

const FooterWrapper = styled('div')`
  margin-top: 40px;
  padding: 0;
`;

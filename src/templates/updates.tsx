import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Page from '../components/Page';
import Container from '../components/Container';
import DocsWrapper from '../components/DocsWrapper';
import DocsHeader from '../components/docs/DocsHeader';
import Footer from '../components/Footer';
import TocFloatingButton from '../components/TocFloatingButton';
import DocsContribution from '../components/DocsContribution';
import SearchWrapper from '../components/SearchWrapper';

import { SiteMetadata, UpdatePost } from '../interfaces/gatsby';

import styled from '../utils/styled';
import VersionUpdate from '../components/updates/VersionUpdate';
import TocWrapper from '../components/TocWrapper';
import { GatsbyNode } from '../interfaces/nodes';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: GatsbyNode<UpdatePost>[];
    };
    markdownRemark: UpdatePost;
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
    const { markdownRemark, latestPosts, site } = this.props.data;
    const { tocIsOpen } = this.state;
    const { siteMetadata } = site;

    return (
      <Page docsPage>
        <Helmet>
          <title>
            {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
          </title>
          <meta name="description" content={markdownRemark.excerpt} />
          <meta property="og:title" content={markdownRemark.frontmatter.title} />
          <meta property="og:description" content={markdownRemark.excerpt} />
        </Helmet>
        <SearchWrapper>
          <Container xl>
            <Link to="/search">Search in docs...</Link>
          </Container>
        </SearchWrapper>
        <DocsWrapper hasToc>
          <TocWrapper isOpen={tocIsOpen} onClick={this.toggleToc}>
            <ul>
              <li>
                <Link to="/release-notes">All Releases</Link>
              </li>
              {latestPosts.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </TocWrapper>
          <Container>
            <DocsHeader>
              <h1>Release Notes</h1>
              <p>The latest news, updates, and changes on Kata Platform.</p>
            </DocsHeader>
            <VersionUpdate post={markdownRemark} />
            <FooterWrapper>
              <DocsContribution />
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
  query UpdatesTemplateQuery($slug: String!) {
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
    latestPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/release-notes/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            layout
          }
          frontmatter {
            title
            version
            category
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
        layout
      }
      frontmatter {
        title
        version
        category
        header_image {
          ... on File {
            childImageSharp {
              fluid(maxWidth: 752) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        date
        date_formatted: date(formatString: "MMMM DD, YYYY")
      }
      excerpt
      htmlAst
    }
  }
`;

const FooterWrapper = styled('div')`
  margin-top: 40px;
  padding: 0;
`;

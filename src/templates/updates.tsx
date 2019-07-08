import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { SiteMetadata, UpdatePost } from '../interfaces/gatsby';

import VersionUpdate from '../components/updates/VersionUpdate';
import IndexLayout from 'layouts';
import { Edge } from 'interfaces/nodes';
import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { TocWrapper } from 'components/docs/TableOfContents';
import { Container } from 'components/layout/Container';
import { DocsHeader } from 'components/docs/DocsHeader';
import { DocsContribution } from 'components/docs/DocsContribution';
import { Footer } from 'components/layout/Footer';
import { BackToTopButton } from 'components/docs/BackToTopButton';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: Edge<UpdatePost>[];
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
      <IndexLayout>
        <Page docsPage>
          <Helmet>
            <title>
              {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
            </title>
            <meta name="description" content={markdownRemark.excerpt} />
            <meta property="og:title" content={markdownRemark.frontmatter.title} />
            <meta property="og:description" content={markdownRemark.excerpt} />
          </Helmet>
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
              <DocsHeader title="Release Notes" subtitle="The latest news, updates, and changes on Kata Platform." />

              <PostsList>
                <VersionUpdate post={markdownRemark} />
              </PostsList>
              <FooterWrapper>
                <DocsContribution />
                <Footer
                  version={siteMetadata.version}
                  siteLastUpdated={siteMetadata.siteLastUpdated}
                  socials={siteMetadata.socials}
                />
              </FooterWrapper>
            </Container>
            <BackToTopButton href="#" />
          </DocsWrapper>
        </Page>
      </IndexLayout>
    );
  }

  private toggleToc = () => {
    this.setState({ tocIsOpen: !this.state.tocIsOpen });
  };
}

const PostsList = styled('div')`
  margin-top: 32px;
`;

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

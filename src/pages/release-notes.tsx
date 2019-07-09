import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

import { SiteMetadata, UpdatePost } from '../interfaces/gatsby';

import IndexLayout from 'layouts';
import { Footer } from 'components/layout/Footer';
import { DocsHeader } from 'components/docs/DocsHeader';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { TocWrapper } from 'components/docs/TableOfContents';
import { Container } from 'components/layout/Container';
import { Page } from 'components/layout/Page';
import { Edge } from 'interfaces/nodes';
import VersionUpdate from 'components/updates/VersionUpdate';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: Edge<UpdatePost>[];
    };
  };
}

const FooterWrapper = styled('div')`
  margin-top: 40px;
  padding: 0;
`;

const VersionUpdatesPage: React.SFC<Props> = ({ data }) => {
  const { siteMetadata } = data.site;
  const [tocIsOpen, setTocIsOpen] = React.useState(false);

  const toggleToc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setTocIsOpen(!tocIsOpen);
  };

  return (
    <IndexLayout navHidden>
      <Page docsPage>
        <Helmet>
          <title>Release Notes &middot; {siteMetadata.title}</title>
          <meta property="og:title" content="Release Notes" />
          <meta name="description" content="The latest news, updates, and changes on Kata Platform." />
          <meta property="og:description" content="The latest news, updates, and changes on Kata Platform." />
        </Helmet>
        <DocsWrapper hasToc>
          <TocWrapper isOpen={tocIsOpen} onClick={toggleToc}>
            <ul>
              <li>
                <Link to="/release-notes">All Releases</Link>
              </li>
              {data.latestPosts.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </TocWrapper>
          <Container>
            <DocsHeader title="Release Notes" subtitle="The latest news, updates, and changes on Kata Platform." />
            <PostsList>
              {data.latestPosts.edges.map(({ node }) => (
                <VersionUpdate key={node.id} post={node} />
              ))}
            </PostsList>
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

const PostsList = styled('div')`
  margin-top: 32px;
`;

export default VersionUpdatesPage;

export const query = graphql`
  query VersionUpdatesPageQuery {
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
    }
  }
`;

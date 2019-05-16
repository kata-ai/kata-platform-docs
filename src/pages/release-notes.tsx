import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import { SiteMetadata, UpdatePost } from '../interfaces/gatsby';
import styled from '../utils/styled';

import VersionUpdate from '../components/updates/VersionUpdate';
import { GatsbyNode } from '../interfaces/nodes';
import Page from '../components/Page';
import SearchWrapper from '../components/SearchWrapper';
import Container from '../components/Container';
import DocsWrapper from '../components/DocsWrapper';
import TocWrapper from '../components/TocWrapper';
import DocsHeader from '../components/docs/DocsHeader';
import Footer from '../components/Footer';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    latestPosts: {
      edges: GatsbyNode<UpdatePost>[];
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
    <Page docsPage>
      <Helmet>
        <title>Release Notes &middot; {siteMetadata.title}</title>
        <meta property="og:title" content="Release Notes" />
        <meta
          name="description"
          content="The latest news, updates, and changes on Kata Platform."
        />
        <meta
          property="og:description"
          content="The latest news, updates, and changes on Kata Platform."
        />
      </Helmet>
      <SearchWrapper>
        <Container xl>
          <Link to="/search">Search in docs...</Link>
        </Container>
      </SearchWrapper>
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
          <DocsHeader>
            <h1>Release Notes</h1>
            <p>The latest news, updates, and changes on Kata Platform.</p>
          </DocsHeader>
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
  );
};

const PostsList = styled('div')`
  margin-top: 24px;
`;

export default VersionUpdatesPage;

export const query = graphql`
  query VersionUpdatesPageQuery {
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

import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import { getPageById } from 'utils/helpers';
import { MenuNode, Edge } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import { Page } from 'components/layout/Page';
import { Container } from 'components/layout/Container';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';
import { MarkdownContent } from 'components/page/Markdown';

import { FooterWrapper, Footer } from 'components/layout/Footer';
import { Pagination } from 'components/ui/Pagination';
import { TocWrapper } from 'components/docs/TableOfContents';
import IndexLayout from 'layouts';
import renderAst from 'utils/renderAst';
import { DocsContribution } from 'components/docs/DocsContribution';
import { BackToTopButton } from 'components/docs/BackToTopButton';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    sectionListOmni: {
      edges: Edge<MenuNode>[];
    };
    sectionList: {
      edges: Edge<MenuNode>[];
    };
    sectionListBusinessDashboard: {
      edges: Edge<MenuNode>[];
    };
    sectionListQios: {
      edges: Edge<MenuNode>[];
    }
    markdownRemark: {
      html: string;
      tableOfContents: string;
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

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const { markdownRemark, sectionList, sectionListOmni, sectionListBusinessDashboard, sectionListQios, site } = data;
  const [tocIsOpen, setTocIsOpen] = React.useState(false);
  const [section, setSection] = React.useState<Edge<MenuNode>[]>(sectionList.edges);
  const { siteMetadata } = site;
  const { prev, next } = markdownRemark.frontmatter;
  const prevPage = getPageById(section, prev);
  const nextPage = getPageById(section, next);

  React.useEffect(() => {
    if (window) {
      const pathname = window.location.pathname;
      if (pathname.includes('kata-omnichat')) {
        setSection(sectionListOmni.edges);
      } else if (pathname.includes('business-dashboard')) {
        setSection(sectionListBusinessDashboard.edges);
      } else if (pathname.includes('qios')) {
        setSection(sectionListQios.edges);
      } else {
        setSection(sectionList.edges);
      }
    }
  }, [section]);

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
        <DocsWrapper hasToc={!!markdownRemark.tableOfContents}>
          {markdownRemark.tableOfContents && (
            <TocWrapper
              isOpen={tocIsOpen}
              onClick={() => setTocIsOpen(!tocIsOpen)}
              dangerouslySetInnerHTML={{ __html: markdownRemark.tableOfContents }}
            />
          )}
          <Container>
            <DocsHeader title={markdownRemark.frontmatter.title} subtitle={markdownRemark.frontmatter.description} />
            <MarkdownContent>{renderAst(markdownRemark.html)}</MarkdownContent>
            <DocsContribution />
            <FooterWrapper>
              {(prevPage || nextPage) && <Pagination prevPage={prevPage} nextPage={nextPage} />}
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
};

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
    sectionListOmni: allTocOmnichatJson {
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
    sectionListBusinessDashboard: allTocBusinessDashboardJson {
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
    sectionListQios: allTocQiosJson {
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

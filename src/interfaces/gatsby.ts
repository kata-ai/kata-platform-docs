export interface SiteAuthor {
  name: string;
  url: string;
  email: string;
}

export interface SiteMetadata {
  title: string;
  sidebarTitle: string;
  sidebarSubtext: string;
  siteLastUpdated: string;
  description: string;
  version: string;
  siteUrl: string;
  keywords: string;
  author: SiteAuthor;
  socials: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  imgpath: string;
  url: string;
}

export interface UpdatePost {
  id: string;
  fields: {
    slug: string;
    layout: string;
  };
  frontmatter: {
    title: string;
    subtitle?: string;
    category: string;
    version: string;
    header_image: {
      childImageSharp: {
        fluid: {
          [key: string]: any;
        };
      };
    };
    date: string;
    date_formatted: string;
  };
  excerpt: string;
  htmlAst: object;
}

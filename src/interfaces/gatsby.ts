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
}

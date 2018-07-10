export interface SiteAuthor {
  name: string;
  url: string;
  email: string;
}

export interface SiteMetadata {
  title: string;
  sidebarTitle: string;
  sidebarSubtext: string;
  description: string;
  siteUrl: string;
  keywords: string;
  author: SiteAuthor;
}

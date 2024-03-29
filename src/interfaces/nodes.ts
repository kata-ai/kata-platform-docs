export interface HeaderMenuItem {
  id: string;
  label: string;
  href: string;
  exact?: boolean;
  new?: boolean;
  external: boolean;
}

export interface TocItem {
  id: string;
  slug: string;
  title: string;
}

export interface MenuNode {
  title: string;
  items: TocItem[];
}

export interface Edge<T> {
  node: T;
}

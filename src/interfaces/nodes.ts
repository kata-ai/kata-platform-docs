export interface MenuItem {
  id: string;
  slug: string;
  title: string;
}

export interface MenuNode {
  title: string;
  items: MenuItem[];
}

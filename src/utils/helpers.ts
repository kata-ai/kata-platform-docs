import { LinkGetProps } from '@reach/router';
import { MenuNode, TocItem, Edge } from 'interfaces/nodes';
import { Color, themeProps, Space } from '../components/Theme';

export const getColor = (colorKey: Color) => themeProps.colors[colorKey];

export const getSpacing = (spaceKey: Space) => themeProps.space[spaceKey];

export const getPageById = (sectionList: Edge<MenuNode>[], templateFile?: string) => {
  if (!templateFile) {
    return undefined;
  }

  const sectionItems = sectionList.map(({ node }) => node.items);
  const flattenedSectionItems: TocItem[] = ([] as TocItem[]).concat(...sectionItems);

  return flattenedSectionItems.find(item => item.id === templateFile);
};

/** Workaround for activeClassName: https://github.com/gatsbyjs/gatsby/issues/7737 */
export const isActive = (exact: boolean = false) => ({ isPartiallyCurrent, isCurrent }: LinkGetProps) => {
  if (exact) {
    return isCurrent ? { className: 'active' } : {};
  }

  return isPartiallyCurrent ? { className: 'active' } : {};
};

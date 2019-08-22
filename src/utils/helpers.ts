import clsx from 'clsx';
import { LinkGetProps, WindowLocation } from '@reach/router';
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

function isDocsPath(location: WindowLocation) {
  const { pathname } = location;
  return (
    pathname.includes('/overview/') ||
    pathname.includes('/concepts/') ||
    pathname.includes('/kata-ml/') ||
    pathname.includes('/nl-studio/') ||
    pathname.includes('/cms-studio/') ||
    pathname.includes('/deployment-guide/') ||
    pathname.includes('/channels/') ||
    pathname.includes('/modules/')
  );
}

/** Workaround for activeClassName: https://github.com/gatsbyjs/gatsby/issues/7737 */
export const isActive = (exact: boolean = false, additionalClassnames?: string) => ({
  isPartiallyCurrent,
  isCurrent,
  location
}: LinkGetProps) => {
  if (exact) {
    return isCurrent || isDocsPath(location) ? { className: clsx(additionalClassnames, 'active') } : {};
  }

  return isPartiallyCurrent ? { className: clsx(additionalClassnames, 'active') } : {};
};

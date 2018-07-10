import { MenuNode, MenuItem } from 'interfaces/nodes';

const getPageById = (sectionList: Array<{ node: MenuNode }>, templateFile?: string) => {
  if (!templateFile) {
    return undefined;
  }

  const sectionItems = sectionList.map(({ node }) => node.items);
  const flattenedSectionItems: MenuItem[] = [].concat.apply([], sectionItems);

  return flattenedSectionItems.find(item => item.id === templateFile);
};

export default getPageById;

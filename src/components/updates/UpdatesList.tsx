import React from 'react';
import { Link } from 'gatsby';
import styled from '../../utils/styled';
import { colors, fontSizes } from '../../styles/variables';
import { UpdatePost } from '../../interfaces/gatsby';
import { GatsbyNode } from '../../interfaces/nodes';

interface UpdatesListProps {
  postsList?: GatsbyNode<UpdatePost>[];
}

const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 8px;
  border-radius: 4px;
  font-weight: 500;
  color: ${colors.neutral08};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    background-color: ${colors.neutral03};
  }

  &:focus {
    background-color: ${colors.neutral08};
    color: ${colors.neutral01};
  }

  &.active {
    background-color: ${colors.kata02};
    color: ${colors.neutral01};
  }
`;

const SectionHeading = styled('h4')`
  margin-top: 0;
  font-size: ${fontSizes.giga};
  line-height: ${fontSizes.giga};
  font-weight: 500;
`;

const UpdatesList: React.FC<UpdatesListProps> = ({ postsList }) => (
  <div>
    <SectionHeading>Updates</SectionHeading>
    {postsList &&
      postsList.map(({ node }) => (
        <ToggleMenuListLink activeClassName="active" to={node.fields.slug}>
          {node.frontmatter.title}
        </ToggleMenuListLink>
      ))}
  </div>
);

export default UpdatesList;

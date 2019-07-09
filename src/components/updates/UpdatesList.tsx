import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { UpdatePost } from '../../interfaces/gatsby';
import { Edge } from '../../interfaces/nodes';
import { colors } from 'utils/variables';

interface UpdatesListProps {
  postsList?: Edge<UpdatePost>[];
}

const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 8px;
  border-radius: 4px;
  font-weight: 500;
  color: ${colors.grey07};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    background-color: ${colors.grey02};
  }

  &:focus {
    background-color: ${colors.grey08};
    color: ${colors.white};
  }

  &.active {
    background-color: ${colors.blue05};
    color: ${colors.white};
  }
`;

const SectionHeading = styled('h4')`
  margin-top: 0;
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

import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import renderAst from '../../utils/renderAst';
import { UpdatePost } from '../../interfaces/gatsby';

import UpdateIcon from './UpdateIcon';
import { MarkdownContent } from 'components/page/Markdown';
import { breakpoints, colors } from 'utils/variables';

interface VersionUpdateProps {
  post: UpdatePost;
}

const PostHeaderIcon = styled('div')`
  display: flex;
  flex-direction: column;
`;

const PostHeaderRight = styled('div')`
  flex: 1 1 auto;
  margin-left: 24px;
  padding-top: 8px;
  padding-bottom: 24px;
`;

const Title = styled('h1')`
  margin: 0;
  font-weight: 500;
`;

const Time = styled('time')`
  display: block;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 300;
`;

const HeaderLine = styled('div')`
  flex: 1 1 auto;
  width: 4px;
  min-height: 34px;
  margin-left: 18px;
  background-color: ${colors.grey03};
`;

const PostHeader = styled('header')`
  display: flex;
  flex-direction: row;
`;

const PostContent = styled('section')`
  border-radius: 6px;
  overflow: hidden;
  z-index: 1;
`;

const PostBody = styled('div')`
  padding: 24px;
  border: 1px solid ${colors.grey03};
  border-top: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  @media (min-width: ${breakpoints.lg}px) {
    padding: 40px;
  }
`;

const PostTitle = styled('h2')`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 500;
`;

const FooterLine = styled('div')`
  width: 4px;
  height: 72px;
  margin-left: 18px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: ${colors.grey03};
`;

const PostFooter = styled('div')``;

const Root = styled('article')`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:last-child,
  &:last-of-type {
    ${PostFooter} {
      display: none;
    }
  }
`;

const VersionUpdate: React.FC<VersionUpdateProps> = ({ post }) => (
  <Root>
    <PostHeader>
      <PostHeaderIcon>
        <UpdateIcon large withImage iconType={post.frontmatter.category} />
        <HeaderLine />
      </PostHeaderIcon>
      <PostHeaderRight>
        <Title>{post.frontmatter.title}</Title>
        <Time dateTime={post.frontmatter.date}>{post.frontmatter.date_formatted}</Time>
      </PostHeaderRight>
    </PostHeader>
    <PostContent>
      <Img fluid={post.frontmatter.header_image.childImageSharp.fluid as any} style={{ maxHeight: '240px' }} />
      <PostBody>
        {post.frontmatter.subtitle && <PostTitle>{post.frontmatter.subtitle}</PostTitle>}
        <MarkdownContent>{renderAst(post.htmlAst)}</MarkdownContent>
      </PostBody>
    </PostContent>
    <PostFooter>
      <FooterLine />
    </PostFooter>
  </Root>
);

export default VersionUpdate;

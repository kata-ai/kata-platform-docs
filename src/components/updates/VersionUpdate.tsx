import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import renderAst from '../../utils/renderAst';
import { UpdatePost } from '../../interfaces/gatsby';

import UpdateIcon from './UpdateIcon';
import { MarkdownContent } from 'components/page/Markdown';
import { breakpoints, colors } from 'utils/variables';
import { Heading, Text } from 'components/foundations';

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
  padding-bottom: 24px;
`;

const HeaderLine = styled('div')`
  flex: 1 1 auto;
  width: 2px;
  min-height: 34px;
  margin-left: 18px;
  background-color: ${colors.grey02};
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
  border: 1px solid ${colors.grey02};
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
  width: 2px;
  height: 32px;
  margin-left: 18px;
  background-color: ${colors.grey02};
`;

const PostFooter = styled('div')``;

const Root = styled('article')`
  display: flex;
  flex-direction: column;

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
        <Heading size={500} lineHeight="40px" m={0}>
          {post.frontmatter.title}
        </Heading>
        <Text as="time" size={300} color="grey04" mt="xs" {...{ dateTime: post.frontmatter.date }}>
          {post.frontmatter.date_formatted}
        </Text>
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

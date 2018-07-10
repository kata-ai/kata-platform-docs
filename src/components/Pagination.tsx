import React from 'react';
import Link from 'gatsby-link';
import styled from 'utils/styled';
import { MenuItem } from 'interfaces/nodes';
import Container from './Container';

const Wrapper = styled('aside')`
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 2rem ${props => props.theme.dimensions.containerPadding}px;
  background-color: ${props => props.theme.colors.drawer.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
`;

const WrapperInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PaginationItem = styled('div')`
  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

const PaginationHeading = styled('span')`
  display: block;
  margin: 0;
  margin-bottom: 4px;
  font-size: ${props => props.theme.dimensions.fontSize.regular}px;
  line-height: ${props => props.theme.dimensions.lineHeight.regular}px;
  font-weight: 300;
  color: ${props => props.theme.colors.gray.calm};
`;

const PaginationLink = styled(Link)`
  margin: 0;
  font-size: ${props => props.theme.dimensions.headingSizes.h3}px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray.copy};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: ${props => props.theme.colors.gray.copy};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: ${props => props.theme.dimensions.headingSizes.h2}px;
  }
`;

const Divider = styled('hr')``;

interface PaginationProps {
  prevPage?: MenuItem;
  nextPage?: MenuItem;
}

const Pagination: React.SFC<PaginationProps> = ({ prevPage, nextPage }) => (
  <Wrapper>
    <WrapperInner>
      <PaginationItem>
        {prevPage && (
          <>
            <PaginationHeading>Previous</PaginationHeading>
            <PaginationLink to={prevPage.slug}>{prevPage.title}</PaginationLink>
          </>
        )}
      </PaginationItem>

      <Divider />

      <PaginationItem>
        {nextPage && (
          <>
            <PaginationHeading>Next</PaginationHeading>
            <PaginationLink to={nextPage.slug}>{nextPage.title}</PaginationLink>
          </>
        )}
      </PaginationItem>
    </WrapperInner>
  </Wrapper>
);

export default Pagination;

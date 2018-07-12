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

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
  }
`;

const WrapperInner = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const PaginationItem = styled('div')`
  flex: 1 1 50%;

  &:first-child {
    text-align: left;
    border-right: 1px solid ${props => props.theme.colors.border};
  }

  &:last-child {
    text-align: right;
  }

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    &:first-child {
      border-right: none;
    }

    &:last-child {
      margin-top: 8px;
    }
  }
`;

interface PaginationItemInnerProps {
  next?: boolean;
}

const PaginationItemInner = styled<PaginationItemInnerProps, 'div'>('div')`
  display: flex;
  flex-direction: ${props => (props.next ? 'row-reverse' : 'row')};
  align-items: flex-end;

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    padding: 12px;
    background-color: ${props => props.theme.colors.drawer.background};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;
  }
`;

const PaginationItemText = styled('div')`
  flex: 1 1 auto;
`;

const PaginationItemIcon = styled('div')`
  padding: 3px 16px;
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
  font-size: ${props => props.theme.dimensions.headingSizes.h2}px;
  line-height: ${props => props.theme.dimensions.lineHeight.heading.h2}px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray.copy};
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${props => props.theme.colors.brand};
  }
`;

interface PaginationProps {
  prevPage?: MenuItem;
  nextPage?: MenuItem;
}

const Pagination: React.SFC<PaginationProps> = ({ prevPage, nextPage }) => (
  <Wrapper>
    <WrapperInner>
      <PaginationItem>
        {prevPage && (
          <PaginationItemInner>
            <PaginationItemIcon>
              <img src={require('assets/images/arrow-left.svg')} />
            </PaginationItemIcon>
            <PaginationItemText>
              <PaginationHeading>Previous</PaginationHeading>
              <PaginationLink to={prevPage.slug}>{prevPage.title}</PaginationLink>
            </PaginationItemText>
          </PaginationItemInner>
        )}
      </PaginationItem>

      <PaginationItem>
        {nextPage && (
          <PaginationItemInner next>
            <PaginationItemIcon>
              <img src={require('assets/images/arrow-right.svg')} />
            </PaginationItemIcon>
            <PaginationItemText>
              <PaginationHeading>Next</PaginationHeading>
              <PaginationLink to={nextPage.slug}>{nextPage.title}</PaginationLink>
            </PaginationItemText>
          </PaginationItemInner>
        )}
      </PaginationItem>
    </WrapperInner>
  </Wrapper>
);

export default Pagination;

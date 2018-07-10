import styled from 'utils/styled';

const TocWrapper = styled('section')`
  display: block;
  margin-left: 24px;
  font-size: 13px;
  line-height: 28px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 240px;
    position: sticky;
    top: 48px;
    max-height: calc(100vh - 90px);
    overflow-y: auto;
  }

  ul {
    padding-left: 16px;
    border-left: 1px solid ${props => props.theme.colors.border};
    list-style-type: none;

    p {
      margin: 0 0 0.5rem;
    }

    ul {
      border-left: none;
    }
  }

  a {
    color: ${props => props.theme.colors.toc.link};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.toc.hover};
    }
  }
`;

export default TocWrapper;

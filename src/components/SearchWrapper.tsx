import styled from '../utils/styled';

const SearchWrapper = styled('div')`
  width: 100%;
  position: relative;
  padding: 24px 24px 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding: 24px 48px 0;
  }
`;

export default SearchWrapper;

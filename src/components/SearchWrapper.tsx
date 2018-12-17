import styled from '../utils/styled';

const SearchWrapper = styled('div')`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 24px 24px 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding: 24px 48px 0;
  }
`;

export default SearchWrapper;

import styled from 'utils/styled';

const DocsWrapper = styled('article')`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  padding: 48px;
  padding-bottom: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-direction: row-reverse;
  }
`;

export default DocsWrapper;

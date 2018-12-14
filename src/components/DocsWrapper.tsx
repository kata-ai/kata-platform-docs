import styled from '../utils/styled';

interface DocsWrapperProps {
  hasToc?: boolean;
}

const DocsWrapper = styled<DocsWrapperProps, 'article'>('article')`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 24px 24px 3rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-direction: ${props => props.hasToc && 'row-reverse'};
    padding: 24px 48px 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    overflow-x: auto;
  }
`;

export default DocsWrapper;

import styled from 'utils/styled';

interface DocsWrapperProps {
  hasToc?: boolean;
}

const DocsWrapper = styled<DocsWrapperProps, 'article'>('article')`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  padding: 24px;
  padding-bottom: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-direction: ${props => props.hasToc && 'row-reverse'};
    padding: 48px;
  }
`;

export default DocsWrapper;

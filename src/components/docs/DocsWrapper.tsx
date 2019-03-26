import styled from '../../utils/styled';

const DocsWrapper = styled('article')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: 48px ${props => props.theme.dimensions.containerPadding} 80px;
`;

export default DocsWrapper;

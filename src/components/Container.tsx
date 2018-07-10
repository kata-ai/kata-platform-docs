import styled from 'utils/styled';

const Container = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${props => props.theme.containerWidth.md}px;
`;

export default Container;

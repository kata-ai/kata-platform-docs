import styled from 'utils/styled';

const DocsHeader = styled('header')`
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    font-weight: ${props => props.theme.fontWeights.heading};
    font-size: ${props => props.theme.dimensions.headingSizes.h1};
    color: ${props => props.theme.colors.ink};
    line-height: ${props => props.theme.dimensions.lineHeight.heading};
  }
`;

export default DocsHeader;

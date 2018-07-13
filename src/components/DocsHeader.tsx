import styled from 'utils/styled';

const DocsHeader = styled('header')`
  margin-bottom: 40px;

  & h1 {
    margin: 0;
    font-weight: ${props => props.theme.fontWeights.heading};
    font-size: ${props => props.theme.dimensions.headingSizes.h1}px;
    color: ${props => props.theme.colors.ink};
    line-height: ${props => props.theme.dimensions.lineHeight.heading.h1}px;
  }
`;

export default DocsHeader;

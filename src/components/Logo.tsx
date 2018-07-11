import styled from 'utils/styled';

const Logo = styled('img')`
  display: block;
  height: 40px;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    height: 56px;
  }
`;

export default Logo;

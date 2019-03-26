import styled from '../../utils/styled';
import { breakpoints } from '../../styles/variables';

interface RowProps {
  centered?: boolean;
  spaceBetween?: boolean;
  breakAt?: keyof typeof breakpoints;
}

const Row = styled<RowProps, 'div'>('div')`
  display: flex;
  flex-direction: column;
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: ${props => (props.breakAt ? breakpoints[props.breakAt] : breakpoints.md)}px) {
    flex-direction: row;
    ${props => props.centered && `justify-content: center;`}
    ${props => props.spaceBetween && `justify-content: space-between;`}
  }
`;

export default Row;

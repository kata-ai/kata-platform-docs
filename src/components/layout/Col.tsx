import styled, { css } from '../../utils/styled';
import { breakpoints } from '../../styles/variables';

interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

function buildColumns(breakpoint: keyof typeof breakpoints, size: number = 12) {
  return css`
    &:not(:last-child) {
      @media (max-width: ${breakpoints[breakpoint] - 1}px) {
        margin-bottom: 24px;
      }
    }

    @media (min-width: ${breakpoints[breakpoint]}px) {
      flex: 0 0 calc(${(size / 12) * 100}% - 30px);
    }
  `;
}

const Col = styled<ColProps, 'div'>('div')`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  margin-left: 15px;
  margin-right: 15px;

  ${props => props.sm && buildColumns('sm', props.sm)}
  ${props => props.md && buildColumns('md', props.md)}
  ${props => props.lg && buildColumns('lg', props.lg)}
  ${props => props.xl && buildColumns('xl', props.xl)}
`;

export default Col;

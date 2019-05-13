import styled from '../../utils/styled';
import { widths } from '../../styles/variables';

interface ContainerProps {
  medium?: boolean;
  large?: boolean;
  extralarge?: boolean;
}

const Container = styled<ContainerProps, 'div'>('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${props => (props.medium ? `max-width: ${widths.containers.md}px` : ``)};
  ${props => (props.large ? `max-width: ${widths.containers.lg}px` : ``)};
  ${props => (props.extralarge ? `max-width: ${widths.containers.xl}px` : ``)};
`;

export default Container;

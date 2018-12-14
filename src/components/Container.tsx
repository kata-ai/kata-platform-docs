import styled, { Theme } from '../utils/styled';
import { ThemeProps } from 'styled-components';

interface ContainerProps {
  xl?: boolean;
  lg?: boolean;
}

const Container = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${(props: ThemeProps<Theme> & ContainerProps) =>
    props.xl
      ? props.theme.containerWidth.xl
      : props.lg
      ? props.theme.containerWidth.lg
      : props.theme.containerWidth.md}px;
`;

export default Container;

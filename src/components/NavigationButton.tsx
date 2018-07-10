import styled from 'utils/styled';

interface NavigationButtonProps {
  visible?: boolean;
}

const NavigationButton = styled<NavigationButtonProps, 'button'>('button')`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export default NavigationButton;

import styled, { css } from 'styled-components';
import { dimensions, colors, breakpoints } from 'utils/variables';

interface HeaderLogoProps {
  navHidden?: boolean;
}

const hasSidebar = css`
  background-color: ${colors.grey01};
`;

const hasNoSidebar = css`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey02};
`;

const HeaderLogo = styled('div')<HeaderLogoProps>`
  display: flex;
  align-items: center;
  width: ${dimensions.widths.sidebar.lg}px;
  height: 100%;
  padding: 0 24px;

  ${props => (props.navHidden ? hasNoSidebar : hasSidebar)}

  @media (max-width: ${breakpoints.lg - 1}px) {
    display: none;
  }
`;

export default HeaderLogo;

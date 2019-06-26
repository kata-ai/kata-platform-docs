import styled, { css } from 'styled-components';
import { dimensions, colors } from 'utils/variables';

interface HeaderLogoProps {
  noSidebar?: boolean;
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

  ${props => (props.noSidebar ? hasNoSidebar : hasSidebar)}
`;

export default HeaderLogo;

import React from 'react';
import styled from '../../utils/styled';
import { breakpoints } from '../../styles/variables';
import Row from '../../components/layout/Row';

interface MarkdownRowProps {
  className?: string;
  style?: React.CSSProperties;
  justify?: 'centered' | 'space-between';
  breakpoint?: keyof typeof breakpoints;
}

const MarkdownRow: React.FC<MarkdownRowProps> = ({
  className,
  style,
  justify,
  breakpoint,
  ...rest
}) => (
  <StyledRow
    className={className}
    style={style}
    centered={justify === 'centered'}
    spaceBetween={justify === 'space-between'}
    breakAt={breakpoint}
    {...rest}
  />
);

const StyledRow = styled(Row)`
  margin-bottom: 24px;
`;

export default MarkdownRow;

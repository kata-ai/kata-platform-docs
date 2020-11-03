import * as React from 'react';

import { Theme } from 'components/Theme';
import GlobalStyles from './GlobalStyles';

interface ResetProps {
  className?: string;
  style?: React.CSSProperties;
}

const AksaraReset: React.FC<ResetProps> = ({ children }) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
};

export default AksaraReset;

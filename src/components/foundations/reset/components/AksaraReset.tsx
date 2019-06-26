import * as React from 'react';

import { Theme } from 'components/Theme';
import GlobalStyles from './GlobalStyles';

interface ResetProps {
  className?: string;
  style?: React.CSSProperties;
}

export default class AksaraReset extends React.Component<ResetProps> {
  render() {
    const { children } = this.props;

    return (
      <Theme>
        <GlobalStyles />
        {children}
      </Theme>
    );
  }
}

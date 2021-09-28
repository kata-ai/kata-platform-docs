import React from 'react';
import { navigate } from '@reach/router';

const Omnichat: React.FC = () => {
  React.useEffect(() => {
    navigate('/kata-omnichat/omnichat-about');
  });
  return null;
};

export default Omnichat;

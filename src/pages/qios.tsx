import React from 'react';
import { navigate } from '@reach/router';

const Qios: React.FC = () => {
  React.useEffect(() => {
    navigate('/qios/qios-introduction');
  });
  return null;
};

export default Qios;

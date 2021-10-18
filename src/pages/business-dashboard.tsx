import React from 'react';
import { navigate } from '@reach/router';

const BusinessDashboard: React.FC = () => {
  React.useEffect(() => {
    navigate('/business-dashboard/business-dashboard-about');
  });
  return null;
};

export default BusinessDashboard;

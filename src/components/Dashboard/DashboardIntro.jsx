import React from 'react';
import { CalloutCard } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

const DashboardIntro = () => {
  const history = useHistory();

  const handleCreateClick = () => {
    history.push('/app/simple-redirects');
  };

  return (
    <CalloutCard
      title="Welcome To  SmartRedirects"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: 'Create Simple Redirect',
        onClick: handleCreateClick,
      }}
    >
      <p>Start by creating a simple redirect fro your shop</p>
    </CalloutCard>
  );
};

export default DashboardIntro;

import React from 'react';
import { useSelector } from 'react-redux';
import { Page, Banner } from '@shopify/polaris';

const ErrorMessage = () => {
  const { show, message } = useSelector(state => state.redirects.errorMessage);

  if (show) {
    return (
      <Page>
        <Banner title="Oops. Something went wrong :(" status="critical">
          <p>{message}</p>
        </Banner>
      </Page>
    );
  }

  return null;
};

export default ErrorMessage;

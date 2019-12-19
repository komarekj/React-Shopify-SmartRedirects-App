import React from 'react';
import PropTypes from 'prop-types';
import { EmptyState } from '@shopify/polaris';

const RedirectError = ({ handleReload }) => (
  <EmptyState
    heading="Ooops! Something went wrong :("
    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    action={{
      content: 'Try To Load Again',
      onAction: handleReload,
    }}
  >
    <p>Reload the page and try again..</p>
  </EmptyState>
);

RedirectError.propTypes = {
  handleReload: PropTypes.func.isRequired,
};

export default RedirectError;

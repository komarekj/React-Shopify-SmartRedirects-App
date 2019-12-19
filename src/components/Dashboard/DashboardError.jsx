import React from 'react';
import { EmptyState } from '@shopify/polaris';

const RedirectError = () => (
  <EmptyState
    heading="Ooops! Something went wrong :("
    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  >
    <p>Reload the page and try again..</p>
  </EmptyState>
);

export default RedirectError;

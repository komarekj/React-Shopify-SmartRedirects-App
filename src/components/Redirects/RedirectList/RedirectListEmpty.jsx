import React from 'react';
import { EmptyState } from '@shopify/polaris';

const RedirectListEmpty = () => (
  <EmptyState
    heading="You Don't Have Any Redirects"
    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  >
    <p>Use the form above to create your first redirect</p>
  </EmptyState>
);

export default RedirectListEmpty;

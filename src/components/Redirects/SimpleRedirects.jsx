import React from 'react';
import Redirects from './Redirects';
import RedirectContentContext from './RedirectContentContext';
import { REDIRECT_SIMPLE } from '../../redux/redirects/redirectTypes';

const CONTENT = {
  title: 'Simple Redirects',
  createDescription: `Simple redirects allow you to connect all your old 
                      URL to new ones on Shopify. Best used for e.g. product or 
                      collection redirects`,
  listDescription: 'Manage your existing redirects',
  pathLabel: 'Path',
};

const SimpleRedirects = () => (
  <RedirectContentContext.Provider value={CONTENT}>
    <Redirects redirectType={REDIRECT_SIMPLE} />
  </RedirectContentContext.Provider>
);

export default SimpleRedirects;

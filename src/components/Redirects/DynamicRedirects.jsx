import React from 'react';
import Redirects from './Redirects';
import ReadirectContentContext from './RedirectContentContext';
import { REDIRECT_DYNAMIC } from '../../redux/redirects/redirectTypes';

const CONTENT = {
  title: 'Dynamic Redirects',
  createDescription: `Dynamic redirects allow you to create custom rules using 
                      regular expressions for URL redirect without knowing each 
                      path. Best used for e.g. redirecting old landing pages to 
                      a new one`,
  listDescription: 'Manage your existing redirects',
  pathLabel: 'RegEx',
};

const DynamicRedirects = () => (
  <ReadirectContentContext.Provider value={CONTENT}>
    <Redirects redirectType={REDIRECT_DYNAMIC} />
  </ReadirectContentContext.Provider>
);

export default DynamicRedirects;

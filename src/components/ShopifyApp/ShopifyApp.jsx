import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import SimpleRedirects from '../Redirects/SimpleRedirects';
import DynamicRedirects from '../Redirects/DynamicRedirects';
import Help from '../Help/Help';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ShopifyAppSkeleton from './ShopifyAppSkeleton';
import ShopifyError from './ShopifyError';
import Errors404 from '../Errors404/Errors404';
import useShopifyAuth from './useShopifyAuth';

const ShopifyApp = () => {
  const { path } = useRouteMatch();
  const { isAuth, authError, installError, installUrl } = useShopifyAuth();

  /**
   * Redirect when we have install URL
   */
  useEffect(() => {
    if (installUrl) {
      window.top.location.href = installUrl;
    }
  }, [installUrl]);

  /**
   * Render
   */
  if (authError || installError) {
    return <ShopifyError />;
  }

  if (isAuth) {
    return (
      <>
        <Navigation />
        <ErrorMessage />
        <Switch>
          <Route path={path} exact>
            <Dashboard />
          </Route>
          <Route path={`${path}/simple-redirects`}>
            <SimpleRedirects />
          </Route>
          <Route path={`${path}/dynamic-redirects`}>
            <DynamicRedirects />
          </Route>
          <Route path={`${path}/help`}>
            <Help />
          </Route>
          <Route path={`${path}/errors-404`}>
            <Errors404 />
          </Route>
          <Route path="*">
            <Redirect to={path} />
          </Route>
        </Switch>
      </>
    );
  }

  return <ShopifyAppSkeleton />;
};

export default ShopifyApp;

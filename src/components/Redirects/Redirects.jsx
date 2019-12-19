import React, { useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from '@shopify/polaris';
import { listRedirects } from '../../redux/redirects/redirectActions';
import CreateRedirect from './CreateRedirect/CreateRedirect';
import RedirectList from './RedirectList/RedirectList';
import RedirectSkeleton from './RedirectSkeleton';
import RedirectError from './RedirectError';
import RedirectContentContext from './RedirectContentContext';

const Redirects = ({ redirectType }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.redirects[redirectType].items);
  const loaded = useSelector(state => state.redirects[redirectType].loaded);
  const loading = useSelector(state => state.redirects[redirectType].loading);
  const error = useSelector(state => state.redirects[redirectType].error);

  const { title } = useContext(RedirectContentContext);

  /**
   * Redirect load
   */
  useEffect(() => {
    if (!loaded && !error && !loading) {
      dispatch(listRedirects(redirectType));
    }
  }, [loaded, error, loading, dispatch, redirectType]);

  const handleReload = useCallback(() => {
    dispatch(listRedirects(redirectType));
  }, [dispatch, redirectType]);

  /**
   * Render
   */
  if (error) {
    return <RedirectError handleReload={handleReload} />;
  }

  if (loaded) {
    return (
      <Page title={title}>
        <CreateRedirect redirectType={redirectType} />
        <RedirectList items={items} redirectType={redirectType} />
      </Page>
    );
  }

  return <RedirectSkeleton />;
};

Redirects.propTypes = {
  redirectType: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Redirects;

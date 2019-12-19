import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '@shopify/polaris';
import ErrorsSkeleton from './ErrorsSkeleton';
import ErrorTable from './ErrorTable';
import ErrorCreateRedirect from './ErrorCreateRedirect';
import ErrorEmpty from './ErrorEmpty';
import { loadErrors } from '../../redux/errors/errorsActions';

const TITLE = '404 Errors';

const Error404 = () => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.errors.items);
  const loading = useSelector(state => state.errors.loading);
  const loaded = useSelector(state => state.errors.loaded);
  const failed = useSelector(state => state.errors.failed);

  /**
   * Initial load
   */
  useEffect(() => {
    if (!loading && !loaded && !failed) {
      dispatch(loadErrors());
    }
  }, [loading, loaded, failed, dispatch]);

  /**
   * Render
   */
  if (failed) {
    return <div>failed</div>;
  }

  if (loaded) {
    return (
      <Page title={TITLE}>
        {items.length > 0 ? (
          <>
            <ErrorCreateRedirect />
            <ErrorTable items={items} />
          </>
        ) : (
          <ErrorEmpty />
        )}
      </Page>
    );
  }

  return <ErrorsSkeleton />;
};

export default Error404;

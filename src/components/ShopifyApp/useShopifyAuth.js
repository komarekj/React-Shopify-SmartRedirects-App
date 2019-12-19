import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {
  getInstallUrl,
  setAuthData,
  setAuthError,
} from '../../redux/auth/authActions';

const useShopifyAuth = () => {
  const dispatch = useDispatch();

  const installUrl = useSelector(state => state.auth.installUrl);
  const isLoading = useSelector(state => state.auth.isLoading);
  const isFinished = useSelector(state => state.auth.isFinished);
  const authError = useSelector(state => state.auth.authError);
  const installError = useSelector(state => state.auth.installError);
  const tokenShop = useSelector(state => state.auth.tokenShop);

  const location = useLocation();
  const { shop, newTokenHash } = queryString.parse(location.search);

  /**
   * Auth finished, let's save the data
   */
  useEffect(() => {
    if (shop && newTokenHash && !isFinished) {
      dispatch(setAuthData(newTokenHash, shop));
    }
  }, [shop, newTokenHash, isFinished, dispatch]);

  /**
   * No shop provided for auth
   */
  useEffect(() => {
    if (!shop && !tokenShop) {
      dispatch(setAuthError(true));
    }
  }, [shop, tokenShop, dispatch]);

  /**
   * Need a new auth
   */
  useEffect(() => {
    if (
      shop &&
      !isLoading &&
      !isFinished &&
      !newTokenHash &&
      !installUrl &&
      !authError &&
      !installError
    ) {
      dispatch(getInstallUrl(shop));
    }
  }, [
    shop,
    isLoading,
    newTokenHash,
    isFinished,
    installUrl,
    authError,
    installError,
    dispatch,
  ]);

  return {
    isAuth: isFinished,
    authError,
    installError,
    installUrl,
  };
};

export default useShopifyAuth;

/* eslint-disable no-console */
import api from '../../services/api';
import {
  AUTH_INSTALL_URL,
  AUTH_INSTALL_ERROR,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_DATA,
} from './authActionTypes';

/**
 * Sync Actions
 */
const setLoading = isLoading => ({ type: AUTH_LOADING, isLoading });

const setUrl = url => ({ type: AUTH_INSTALL_URL, url });

const setInstallError = hasError => ({ type: AUTH_INSTALL_ERROR, hasError });

const setAuthData = (tokenHash, tokenShop) => ({
  type: AUTH_DATA,
  tokenHash,
  tokenShop,
});

const setAuthError = hasError => ({ type: AUTH_ERROR, hasError });

/**
 * Async Actions
 */
const getInstallUrl = shopUrl => dispatch => {
  dispatch(setLoading(true));
  api.install
    .getInstallUrl(shopUrl)
    .then(({ url }) => {
      dispatch(setUrl(url));
    })
    .catch(err => {
      console.log(err);
      dispatch(setInstallError(true));
    });
};

export { setAuthData, getInstallUrl, setAuthError };

/* eslint-disable no-console */
import api from '../../services/api';
import { getTokenHash } from '../helpers/actionHelper';
import {
  ERRORS_UPDATE_LIST,
  ERRORS_REQUEST_FAILED,
  ERRORS_REQUEST_LOADING,
  ERRORS_TOGGLE_CREATE_REDIRECT,
} from './errorsActionTypes';

/**
 * Sync Actions
 */
const updateErrors = data => ({
  type: ERRORS_UPDATE_LIST,
  items: data.items,
  count: data.count,
});

const setErrorsLoading = loading => ({ type: ERRORS_REQUEST_LOADING, loading });

const setErrorsFailed = failed => ({ type: ERRORS_REQUEST_FAILED, failed });

const toggleErrorCreateRedirect = (open, path) => ({
  type: ERRORS_TOGGLE_CREATE_REDIRECT,
  open,
  path,
});

/**
 * Async Actions
 */
const loadErrors = () => (dispatch, getState) => {
  const tokenHash = getTokenHash(getState);
  dispatch(setErrorsLoading(true));

  api.errors
    .listErrors(tokenHash)
    .then(list => {
      dispatch(updateErrors(list));
    })
    .catch(error => {
      console.log(error);
      dispatch(setErrorsFailed(true));
    });
};

export { loadErrors, toggleErrorCreateRedirect };

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import nanoid from 'nanoid';
import { getTokenHash } from '../helpers/actionHelper';
import api from '../../services/api';
import {
  REDIRECT_REQUEST_LOADING,
  REDIRECT_REQUEST_ERROR,
  REDIRECT_REQUEST_FINISHED,
  REDIRECT_TOGGLE_ERROR_MESSAGE,
  REDIRECT_REMOVE,
  REDIRECT_UPDATE,
  REDIRECT_CREATE,
  REDIRECT_UPDATE_NEW_ITEM,
} from './redirectActionTypes';

/**
 * Sync Actions
 */
export const finishLoadingRedirects = (redirectType, data) => ({
  type: REDIRECT_REQUEST_FINISHED,
  redirectType,
  items: data.items,
  count: data.count,
});

export const startLoadingRedirects = redirectType => ({
  type: REDIRECT_REQUEST_LOADING,
  redirectType,
});

export const failLoadingRedirects = redirectType => ({
  type: REDIRECT_REQUEST_ERROR,
  redirectType,
});

export const localRedirectUpdate = (redirectType, item) => ({
  type: REDIRECT_UPDATE,
  redirectType,
  item,
});

export const localRedirectAdd = (redirectType, item) => ({
  type: REDIRECT_CREATE,
  redirectType,
  item,
});

export const localRedirectRemove = (redirectType, _id) => ({
  type: REDIRECT_REMOVE,
  redirectType,
  _id,
});

export const toggleErrorMessage = (show, message) => ({
  type: REDIRECT_TOGGLE_ERROR_MESSAGE,
  show,
  message,
});

export const updateNewRedirect = (redirectType, temporaryId, item) => ({
  type: REDIRECT_UPDATE_NEW_ITEM,
  redirectType,
  temporaryId,
  item,
});

/**
 * Async Actions
 */
export const listRedirects = (redirectType, page = 1) => (
  dispatch,
  getState
) => {
  const tokenHash = getTokenHash(getState);
  dispatch(startLoadingRedirects(redirectType));

  api.redirects
    .listRedirects(redirectType, tokenHash)
    .then(data => {
      dispatch(finishLoadingRedirects(redirectType, data));
    })
    .catch(err => {
      console.log(err);
      dispatch(failLoadingRedirects(redirectType));
    });
};

export const updateRedirect = (redirectType, item) => (dispatch, getState) => {
  const tokenHash = getTokenHash(getState);
  const originalRedirects = getState().redirects[redirectType].items;

  dispatch(localRedirectUpdate(redirectType, item));
  api.redirects.updateRedirect(item, tokenHash).catch(err => {
    console.log(err);
    dispatch(
      toggleErrorMessage(true, 'Failed saving your redirect, please try again')
    );
    dispatch(
      finishLoadingRedirects(redirectType, { items: originalRedirects })
    );
  });
};

export const addRedirect = (redirectType, item) => (dispatch, getState) => {
  const temporaryId = nanoid();
  const newItem = {
    ...item,
    redirectType,
    temporaryId,
  };

  const tokenHash = getTokenHash(getState);
  const originalRedirects = getState().redirects[redirectType].items;
  dispatch(localRedirectAdd(redirectType, newItem));

  api.redirects
    .createRedirect(newItem, tokenHash)
    .then(createdItem => {
      dispatch(updateNewRedirect(redirectType, temporaryId, createdItem));
    })
    .catch(err => {
      console.log(err);
      dispatch(
        toggleErrorMessage(
          true,
          'Failed adding your redirect, please try again'
        )
      );
      dispatch(
        finishLoadingRedirects(redirectType, { items: originalRedirects })
      );
    });
};

export const removeRedirect = (redirectType, item) => (dispatch, getState) => {
  const { _id } = item;
  const tokenHash = getTokenHash(getState);
  const originalRedirects = getState().redirects[redirectType].items;
  dispatch(localRedirectRemove(redirectType, _id, tokenHash));

  api.redirects.removeRedirect(_id, tokenHash).catch(err => {
    console.log(err);
    dispatch(
      toggleErrorMessage(
        true,
        'Failed removing your redirect, please try again'
      )
    );
    dispatch(
      finishLoadingRedirects(redirectType, { items: originalRedirects })
    );
  });
};

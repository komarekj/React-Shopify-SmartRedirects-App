import {
  ERRORS_UPDATE_LIST,
  ERRORS_REQUEST_FAILED,
  ERRORS_REQUEST_LOADING,
  ERRORS_TOGGLE_CREATE_REDIRECT,
} from './errorsActionTypes';

const initialState = {
  items: [],
  count: 0,
  loading: false,
  loaded: false,
  failed: false,
  createRedirectOpen: false,
  createRedirectPath: null,
};

const errorsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ERRORS_REQUEST_LOADING: {
      const { loading } = action;
      return {
        ...state,
        hasError: false,
        loading,
      };
    }
    case ERRORS_UPDATE_LIST: {
      const { items, count } = action;
      return {
        ...state,
        loading: false,
        hasError: false,
        loaded: true,
        items,
        count,
      };
    }
    case ERRORS_REQUEST_FAILED: {
      const { failed } = action;
      return {
        ...state,
        failed,
      };
    }
    case ERRORS_TOGGLE_CREATE_REDIRECT: {
      const { open, path } = action;
      return {
        ...state,
        createRedirectOpen: open,
        createRedirectPath: path,
      };
    }
    default:
      return state;
  }
};

export default errorsReducer;

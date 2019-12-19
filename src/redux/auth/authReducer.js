import {
  AUTH_INSTALL_URL,
  AUTH_INSTALL_ERROR,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_DATA,
} from './authActionTypes';

const initialState = {
  installUrl: null,
  tokenHash: null,
  tokenShop: null,
  isLoading: false,
  installError: false,
  authError: false,
  isFinished: false,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case AUTH_INSTALL_URL: {
      const { url } = action;
      return {
        ...state,
        installUrl: url,
        isLoading: false,
        authError: false,
      };
    }
    case AUTH_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case AUTH_INSTALL_ERROR: {
      const { hasError } = action;
      return {
        ...state,
        installError: hasError,
        isLoading: false,
      };
    }
    case AUTH_ERROR: {
      const { hasError } = action;
      return {
        ...state,
        authError: hasError,
        isLoading: false,
      };
    }
    case AUTH_DATA: {
      const { tokenHash, tokenShop } = action;
      return {
        ...state,
        tokenHash,
        tokenShop,
        isFinished: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;

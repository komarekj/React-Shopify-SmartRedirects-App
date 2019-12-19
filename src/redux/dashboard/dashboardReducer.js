import {
  DASHBOARD_SET_DATA,
  DASHBOARD_REQUEST_FAILED,
  DASHBOARD_REQUEST_LOADING,
} from './dashboardActionTypes';

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  failed: false,
};

const summaryReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case DASHBOARD_REQUEST_LOADING: {
      const { loading } = action;
      return {
        ...state,
        failed: false,
        loading,
      };
    }
    case DASHBOARD_SET_DATA: {
      const { data } = action;
      return {
        ...state,
        loading: false,
        failed: false,
        loaded: true,
        data,
      };
    }
    case DASHBOARD_REQUEST_FAILED: {
      const { failed } = action;
      return {
        ...state,
        loading: false,
        failed,
      };
    }
    default:
      return state;
  }
};

export default summaryReducer;

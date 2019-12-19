/* eslint-disable no-console */
import { getTokenHash } from '../helpers/actionHelper';
import api from '../../services/api';
import {
  DASHBOARD_SET_DATA,
  DASHBOARD_REQUEST_FAILED,
  DASHBOARD_REQUEST_LOADING,
} from './dashboardActionTypes';

/**
 * Sync actions
 */
const setDashboardData = data => ({
  type: DASHBOARD_SET_DATA,
  data,
});

const setDashboardFailed = failed => ({
  type: DASHBOARD_REQUEST_FAILED,
  failed,
});

const setDashboardLoading = loading => ({
  type: DASHBOARD_REQUEST_LOADING,
  loading,
});

/**
 * Async actions
 */
const getDashboardData = () => (dispatch, getState) => {
  const tokenHash = getTokenHash(getState);
  dispatch(setDashboardLoading(true));

  api.dashboard
    .getDashboard(tokenHash)
    .then(data => {
      dispatch(setDashboardData(data));
    })
    .catch(error => {
      console.log(error);
      dispatch(setDashboardFailed(true));
    });
};

export { getDashboardData };

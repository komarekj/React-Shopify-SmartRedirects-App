/* eslint-disable import/prefer-default-export */
import { apiCall } from '../apiHelper';

/**
 * Dashboard data
 */
const getDashboard = async tokenHash => apiCall('dashboard/get', { tokenHash });

export { getDashboard };

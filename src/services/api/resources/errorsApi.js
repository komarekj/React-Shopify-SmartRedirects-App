/* eslint-disable import/prefer-default-export */
import { apiCall } from '../apiHelper';

/**
 * List errors
 */
const listErrors = tokenHash => apiCall('error/list', { tokenHash });

export { listErrors };

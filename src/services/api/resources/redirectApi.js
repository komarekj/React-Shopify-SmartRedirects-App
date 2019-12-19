import { apiCall } from '../apiHelper';

/**
 * List redirect for specific type
 */
const listRedirects = (redirectType, tokenHash) =>
  apiCall('redirect/list', { redirectType, tokenHash });

/**
 * Create a new redirect
 */
const createRedirect = (data, tokenHash) =>
  apiCall('redirect/create', { ...data, tokenHash });

/**
 * Update a redirect
 */
const updateRedirect = (data, tokenHash) =>
  apiCall('redirect/update', { ...data, tokenHash });

/**
 * Remove a redirect
 */
const removeRedirect = (_id, tokenHash) =>
  apiCall('redirect/remove', { _id, tokenHash });

export { listRedirects, createRedirect, updateRedirect, removeRedirect };

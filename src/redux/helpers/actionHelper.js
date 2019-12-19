/* eslint-disable import/prefer-default-export */
/**
 * Helpers
 */
const getTokenHash = getState => {
  const { auth } = getState();
  return auth.tokenHash;
};

export { getTokenHash };

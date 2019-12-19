/* eslint-disable no-underscore-dangle */
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

const MATCHING_REDIRECT_ERROR = 'Redirect with matching path already exists';

const useValidRedirect = (redirectType, formData) => {
  const [error, setError] = useState();
  const items = useSelector(state => state.redirects[redirectType].items);

  const validate = useCallback(() => {
    const matchingRedirect = items.find(
      item => item.path === formData.path && item._id !== formData._id
    );

    if (matchingRedirect) {
      setError(MATCHING_REDIRECT_ERROR);
      return false;
    }

    setError(null);
    return [true];
  }, [formData, items]);

  return [validate, error];
};

export default useValidRedirect;

import { useState, useCallback } from 'react';

const FIELD_ERROR_MSG = 'Field is requred';

const useValidateForm = formData => {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = useCallback(() => {
    let isValid = true;
    Object.keys(formData).forEach(field => {
      const hasError = formData[field].trim() === '';

      setFormErrors(errors => ({
        ...errors,
        [field]: hasError ? FIELD_ERROR_MSG : false,
      }));

      if (hasError) {
        isValid = false;
      }
    });

    return isValid;
  }, [formData]);

  return {
    validateForm,
    formErrors,
  };
};

export default useValidateForm;

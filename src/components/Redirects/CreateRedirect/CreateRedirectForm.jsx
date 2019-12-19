import React, { useState, useCallback, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, FormLayout, TextField, Button } from '@shopify/polaris';
import RedirectContentContext from '../RedirectContentContext';
import { addRedirect } from '../../../redux/redirects/redirectActions';
import useValidateForm from '../useValidateForm';
import useValidateRedirect from '../useValidateRedirect';

const CreateRedirectForm = ({ redirectType, initialValues, onSubmit }) => {
  const { pathLabel } = useContext(RedirectContentContext);
  const dispatch = useDispatch();

  const emptyForm = useRef({
    path: '',
    target: '',
  });

  const [formData, setFormData] = useState({
    ...emptyForm.current,
    ...initialValues,
  });

  const { formErrors, validateForm } = useValidateForm(formData);
  const [validateRedirect, redirectValidationError] = useValidateRedirect(
    redirectType,
    formData
  );

  /**
   * Handlers
   */
  const handleFieldChange = useCallback((value, id) => {
    setFormData(data => ({
      ...data,
      [id]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    const isValidForm = validateForm();
    const isValidRedirect = validateRedirect();

    if (isValidForm && isValidRedirect) {
      dispatch(addRedirect(redirectType, formData));
      setFormData({ ...emptyForm.current });
      onSubmit();
    }
  }, [
    dispatch,
    formData,
    redirectType,
    validateForm,
    validateRedirect,
    onSubmit,
  ]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <FormLayout.Group condensed>
          <TextField
            id="path"
            label={pathLabel}
            prefix="/"
            value={formData.path}
            onChange={handleFieldChange}
            error={redirectValidationError || formErrors.path}
          />
          <TextField
            id="target"
            label="Target"
            prefix="/"
            value={formData.target}
            onChange={handleFieldChange}
            error={formErrors.target}
          />
          <div className="create-redirect__button-wrap">
            <Button submit primary fullWidth>
              Create
            </Button>
          </div>
        </FormLayout.Group>
      </FormLayout>
    </Form>
  );
};

CreateRedirectForm.propTypes = {
  redirectType: PropTypes.string.isRequired,
  initialValues: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func,
};

CreateRedirectForm.defaultProps = {
  initialValues: {},
  onSubmit: () => {},
};

export default CreateRedirectForm;

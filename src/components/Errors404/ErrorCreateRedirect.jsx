import React from 'react';
import { Modal, TextContainer } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateRedirectForm from '../Redirects/CreateRedirect/CreateRedirectForm';
import { toggleErrorCreateRedirect } from '../../redux/errors/errorsActions';
import { REDIRECT_SIMPLE } from '../../redux/redirects/redirectTypes';

const MODAL_TITLE = 'Create New Redirect';

const ErrorCreateRedirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const open = useSelector(state => state.errors.createRedirectOpen);
  const path = useSelector(state => state.errors.createRedirectPath);

  const handleModalClose = () => {
    dispatch(toggleErrorCreateRedirect(false));
  };

  const handleFormSubmit = () => {
    dispatch(toggleErrorCreateRedirect(false));
    history.push('/app/simple-redirects');
  };

  return (
    <Modal title={MODAL_TITLE} open={open} onClose={handleModalClose}>
      <Modal.Section>
        <TextContainer>
          <p>
            Use Instagram posts to share your products with millions of people.
            Let shoppers buy from your store without leaving Instagram.
          </p>
          <CreateRedirectForm
            redirectType={REDIRECT_SIMPLE}
            initialValues={{ path }}
            onSubmit={handleFormSubmit}
          />
        </TextContainer>
      </Modal.Section>
    </Modal>
  );
};

export default ErrorCreateRedirect;

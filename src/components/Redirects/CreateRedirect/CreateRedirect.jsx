import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, TextContainer } from '@shopify/polaris';
import CreateRedirectForm from './CreateRedirectForm';
import RedirectContentContext from '../RedirectContentContext';

import './createRedirect.css';

const TITLE = 'Create New Redirect';

const CreateRedirect = ({ redirectType }) => {
  const { createDescription } = useContext(RedirectContentContext);

  return (
    <Card title={TITLE} sectioned>
      <TextContainer>
        <p>{createDescription}</p>
        <CreateRedirectForm redirectType={redirectType} />
      </TextContainer>
    </Card>
  );
};

CreateRedirect.propTypes = {
  redirectType: PropTypes.string.isRequired,
};

export default CreateRedirect;

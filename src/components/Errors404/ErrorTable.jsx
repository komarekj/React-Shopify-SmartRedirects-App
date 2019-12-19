import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Card, DataTable, Button, TextContainer } from '@shopify/polaris';
import { toggleErrorCreateRedirect } from '../../redux/errors/errorsActions';

import './ErrorTable.css';

const TITLE = 'Your Latest Errors';
const DESCRIPTION = `Review your unresolved URL 404 errors 
                     and create redirects to fix them`;

const ErrorTable = ({ items }) => {
  const dispatch = useDispatch();

  const handleCreateRedirect = index => {
    const selectedError = items[index];
    dispatch(toggleErrorCreateRedirect(true, selectedError.path.slice(1)));
  };

  const rows = items.map(({ path, count, updated }, index) => [
    path,
    count,
    moment(updated).fromNow(),
    <Button onClick={() => handleCreateRedirect(index)}>
      Create Redirect
    </Button>,
  ]);

  return (
    <div className="errors__table-wrap">
      <Card title={TITLE} sectioned>
        <TextContainer>
          <p>{DESCRIPTION}</p>
          <DataTable
            columnContentTypes={['text', 'text', 'text', 'text']}
            headings={['Path', 'Error Count', 'Last Error', '']}
            rows={rows}
            verticalAlign="middle"
          />
        </TextContainer>
      </Card>
    </div>
  );
};

ErrorTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ErrorTable;

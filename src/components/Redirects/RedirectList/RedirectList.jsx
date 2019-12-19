import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Card, DataTable, TextContainer } from '@shopify/polaris';
import RedirectListEmpty from './RedirectListEmpty';
import RedirectContentContext from '../RedirectContentContext';
import renderListItem from './renderListItem';
import {
  removeRedirect,
  updateRedirect,
} from '../../../redux/redirects/redirectActions';
import useValidateForm from '../useValidateForm';
import useValidateRedirect from '../useValidateRedirect';

import './redirectList.css';

const TITLE = 'Existing Redirects';

const RedirectList = ({ items, redirectType }) => {
  const { listDescription, pathLabel } = useContext(RedirectContentContext);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({});
  const [editIndex, setEditIndex] = useState(-1);
  const { formErrors, validateForm } = useValidateForm(editData);
  const [validateRedirect, redirectValidationError] = useValidateRedirect(
    redirectType,
    editData
  );

  /**
   * Handlers
   */
  const handleRemove = useCallback(
    index => {
      const item = items[index];
      dispatch(removeRedirect(redirectType, item));
    },
    [dispatch, items, redirectType]
  );

  const handleSave = useCallback(() => {
    const isValidForm = validateForm();
    const isValidRedirect = validateRedirect();

    if (isValidForm && isValidRedirect) {
      dispatch(updateRedirect(redirectType, editData));
      setEditIndex(-1);
    }
  }, [dispatch, editData, redirectType, validateForm, validateRedirect]);

  const handleEditToggle = useCallback(
    index => {
      if (index > -1) {
        const { _id, path, target } = items[index];
        setEditData({ _id, path, target });
      } else {
        setEditData({});
      }
      setEditIndex(index);
    },
    [items]
  );

  const handleFieldChange = useCallback((value, id) => {
    setEditData(data => ({
      ...data,
      [id]: value,
    }));
  }, []);

  /**
   * Render empty state
   */
  if (items.length === 0) {
    return <RedirectListEmpty />;
  }

  /**
   * Render redirect list
   */
  return (
    <Card title={TITLE} sectioned>
      <TextContainer>
        <p>{listDescription}</p>
        <div className="redirect-list__table">
          <DataTable
            columnContentTypes={['text', 'text', 'text']}
            headings={[pathLabel, 'Target', 'Actions']}
            rows={items.map((item, index) =>
              renderListItem(
                item,
                index,
                editIndex,
                editData,
                handleEditToggle,
                handleRemove,
                handleFieldChange,
                handleSave,
                formErrors,
                redirectValidationError
              )
            )}
          />
        </div>
      </TextContainer>
    </Card>
  );
};

RedirectList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  redirectType: PropTypes.string.isRequired,
};

export default RedirectList;

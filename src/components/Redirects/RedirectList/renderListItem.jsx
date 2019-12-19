import React from 'react';
import { TextField, Button, ButtonGroup } from '@shopify/polaris';

const renderListItem = (
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
) => {
  // Currenly editing this item
  if (editIndex === index) {
    return [
      <TextField
        id="path"
        label="Path"
        prefix="/"
        value={editData.path}
        onChange={handleFieldChange}
        error={redirectValidationError || formErrors.path}
      />,
      <TextField
        id="target"
        label="Target"
        prefix="/"
        value={editData.target}
        onChange={handleFieldChange}
        error={formErrors.target}
      />,
      <div className="redirect-list__form-buttons">
        <ButtonGroup>
          <Button onClick={() => handleEditToggle(-1)}>Discard</Button>
          <Button onClick={handleSave} primary>
            Save
          </Button>
        </ButtonGroup>
      </div>,
    ];
  }

  return [
    `/${item.path}`,
    `/${item.target}`,
    <ButtonGroup>
      <Button onClick={() => handleEditToggle(index)}>Edit</Button>
      <Button onClick={() => handleRemove(index)} destructive>
        Remove
      </Button>
    </ButtonGroup>,
  ];
};

export default renderListItem;

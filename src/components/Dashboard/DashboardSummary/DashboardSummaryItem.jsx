import React from 'react';
import PropTypes from 'prop-types';
import { Card, TextContainer, DisplayText, Icon } from '@shopify/polaris';

import './DashboardSummaryItem.css';

const DashboardSummaryItem = ({ title, icon, count }) => (
  <Card sectioned>
    <TextContainer>
      <div className="summary-item__inner-wrap">
        <Icon source={icon} color="inkLightest" />
        <DisplayText size="extraLarge">{count}</DisplayText>
        <p>{title}</p>
      </div>
    </TextContainer>
  </Card>
);

DashboardSummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default DashboardSummaryItem;

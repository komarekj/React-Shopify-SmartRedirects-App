import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@shopify/polaris';
import DashboardSummaryItem from './DashboardSummaryItem';
import {
  RefreshMinor,
  AnalyticsMajorMonotone,
  BehaviorMajorMonotone,
} from '@shopify/polaris-icons';

const DashboardSummary = ({ summary }) => (
  <Layout>
    <Layout.Section oneThird>
      <DashboardSummaryItem
        title="Total Redirects"
        icon={RefreshMinor}
        count={summary.redirectCount}
      />
    </Layout.Section>
    <Layout.Section oneThird>
      <DashboardSummaryItem
        title="Unique 404 Errors"
        icon={BehaviorMajorMonotone}
        count={summary.errorCountUnique}
      />
    </Layout.Section>
    <Layout.Section oneThird>
      <DashboardSummaryItem
        title="404 Erorrs Last Month"
        icon={AnalyticsMajorMonotone}
        count={summary.errorsCountLastMonth}
      />
    </Layout.Section>
  </Layout>
);

DashboardSummary.propTypes = {
  summary: PropTypes.shape({
    redirectCount: PropTypes.number.isRequired,
    errorCountUnique: PropTypes.number.isRequired,
    errorsCountLastMonth: PropTypes.number.isRequired,
  }).isRequired,
};

export default DashboardSummary;

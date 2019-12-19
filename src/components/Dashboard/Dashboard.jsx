import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Page, Layout } from '@shopify/polaris';
import DashboardSummary from './DashboardSummary/DashboardSummary';
import DashboardGraph from './DashboardGraph';
import DashboardSkeleton from './DashboardSkeleton';
import DashboardError from './DashboardError';
import DashboardIntro from './DashboardIntro';
import { getDashboardData } from '../../redux/dashboard/dashboardActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dashboard.data);
  const loading = useSelector(state => state.dashboard.loading);
  const loaded = useSelector(state => state.dashboard.loaded);
  const failed = useSelector(state => state.dashboard.failed);

  /**
   * Initial load
   */
  useEffect(() => {
    if (!loading && !loaded && !failed) {
      dispatch(getDashboardData());
    }
  }, [dispatch, loading, loaded, failed]);

  /**
   * Render
   */
  if (failed) {
    return <DashboardError />;
  }

  if (loaded) {
    return (
      <Page title="Dashboard">
        <Layout>
          {data.summary.redirectCount === 0 && (
            <Layout.Section>
              <DashboardIntro />
            </Layout.Section>
          )}
          <Layout.Section>
            <DashboardSummary summary={data.summary} />
          </Layout.Section>
          <Layout.Section>
            <DashboardGraph data={data.errorData} />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return <DashboardSkeleton />;
};

export default Dashboard;

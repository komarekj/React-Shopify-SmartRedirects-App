import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Layout, Card } from '@shopify/polaris';
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

import 'react-vis/dist/style.css';

const DashboardGraph = ({ data }) => {
  const graphWrapRef = useRef();
  const [graphWidth, setGraphWidth] = useState(0);

  const graphData = data.map(item => ({
    x: moment(item.date).format('M/D'),
    y: item.count,
  }));

  useEffect(() => {
    if (graphWrapRef.current) {
      const width = graphWrapRef.current.offsetWidth;
      setGraphWidth(width);
    }
  }, [graphWrapRef]);

  return (
    <Layout>
      <Layout.Section>
        <Card title="Your 404 Errors: Last Month" sectioned>
          <div ref={graphWrapRef}>
            <XYPlot height={300} width={graphWidth} xType="ordinal">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis tickLabelAngle={35} tickSize={25} tickPadding={15} />
              <YAxis />
              <VerticalBarSeries data={graphData} color="#5c6ac4" />
            </XYPlot>
          </div>
        </Card>
      </Layout.Section>
    </Layout>
  );
};

DashboardGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardGraph;

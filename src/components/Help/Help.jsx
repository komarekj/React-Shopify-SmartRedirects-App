import React from 'react';
import { Page, Card, Layout } from '@shopify/polaris';
import HelpSidebar from './HelpSidebar';

import helpContent from './helpContent.json';

const Help = () => {
  return (
    <Page title="Help">
      <Layout>
        <Layout.Section>
          {helpContent.map(({ title, content }) => (
            <Card title={title} sectioned>
              <p>{content}</p>
            </Card>
          ))}
        </Layout.Section>
        <Layout.Section secondary>
          <HelpSidebar />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Help;

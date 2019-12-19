import React from 'react';
import { Card, Stack, Icon, Heading } from '@shopify/polaris';
import { QuestionMarkMajorMonotone } from '@shopify/polaris-icons';

const HelpSidebar = () => (
  <Card
    title={
      <Stack alignment="center">
        <Icon source={QuestionMarkMajorMonotone} />
        <Heading>Need More Help?</Heading>
      </Stack>
    }
    sectioned
  >
    <p>
      Do you have any questions? Feel free to contact us at&nbsp;
      <a
        href="mailto:support@pixelter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        support@pixelter.com
      </a>
    </p>
  </Card>
);

export default HelpSidebar;

import React from 'react';
import {
  SkeletonPage,
  Layout,
  Card,
  TextContainer,
  SkeletonDisplayText,
  SkeletonBodyText,
} from '@shopify/polaris';

const ErrorsSkeleton = () => (
  <SkeletonPage>
    <Layout>
      <Layout.Section>
        <Card>
          <Card.Section>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText />
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  </SkeletonPage>
);

export default ErrorsSkeleton;

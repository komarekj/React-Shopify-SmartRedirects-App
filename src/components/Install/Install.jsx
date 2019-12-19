import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Page,
  Layout,
  Card,
  TextField,
  Stack,
  Form,
  FormLayout,
  Button,
  InlineError,
} from '@shopify/polaris';

const SHOP_SUFIX = '.myshopify.com';

const Install = () => {
  const [shop, setShop] = useState('');
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  /**
   * Handlers
   */
  const handleShopChange = useCallback(value => setShop(value), []);

  const handleSubmit = useCallback(() => {
    if (shop) {
      setHasError(false);
      history.push({
        pathname: '/app',
        search: `?shop=${shop}${SHOP_SUFIX}`,
      });
    } else {
      setHasError(true);
    }
  }, [shop, history]);

  return (
    <Page title="SmartRedirects by Pixelter" narrowWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <Stack>
                  <Stack.Item fill>
                    <TextField
                      label="Your Shop Url"
                      id="shopUrl"
                      suffix={SHOP_SUFIX}
                      value={shop}
                      onChange={handleShopChange}
                      labelHidden
                    />
                  </Stack.Item>
                  <Stack.Item>
                    <Button primary submit>
                      Install
                    </Button>
                  </Stack.Item>
                </Stack>
                {hasError && (
                  <InlineError
                    message="Shop URL is required"
                    fieldID="shopUrl"
                  />
                )}
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Install;

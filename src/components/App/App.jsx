import React from 'react';
import { AppProvider } from '@shopify/polaris';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Install from '../Install/Install';
import ShopifyApp from '../ShopifyApp/ShopifyApp';

import '@shopify/polaris/styles.css';

function App() {
  return (
    <AppProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Install />
            </Route>
            <Route path="/app">
              <ShopifyApp />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </AppProvider>
  );
}

export default App;

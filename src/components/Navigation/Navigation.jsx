import React, { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Tabs } from '@shopify/polaris';

import navigationItems from './navigationItems.json';

const Navigation = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const selected = navigationItems.findIndex(item => item.path === pathname);

  const handleTabToggle = useCallback(
    selectedIdx => {
      const { path } = navigationItems[selectedIdx];
      history.push(path);
    },
    [history]
  );

  return (
    <Tabs
      tabs={navigationItems}
      selected={selected}
      onSelect={handleTabToggle}
    />
  );
};

export default Navigation;

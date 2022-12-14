import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { SwitchNavigator } from './AppNavigator';

export const RootNavigator = () => (
  <NavigationContainer>
    <SwitchNavigator />
  </NavigationContainer>
);

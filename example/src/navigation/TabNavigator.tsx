import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withNavigation } from 'react-navigation-compatible';

import { TabOne } from '../screens/TabOne';
import { TabTwo } from '../screens/TabTwo';

import { Routes } from './routes';

const Stack = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TabOne}>
      <Stack.Screen name={Routes.TabOne} component={withNavigation(TabOne)} />
      <Stack.Screen name={Routes.TabTwo} component={withNavigation(TabTwo)} />
    </Stack.Navigator>
  );
};

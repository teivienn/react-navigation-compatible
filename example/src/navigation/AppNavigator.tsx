import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withNavigation, createSwitchNavigator } from 'react-navigation-compatible';

import { Home } from '../screens/Home';
import { Test } from '../screens/Test';

import { TabNavigator } from './TabNavigator';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

const Switch = createSwitchNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Tab} component={TabNavigator} />
      <Stack.Screen name={Routes.Test} component={withNavigation(Test)} />
    </Stack.Navigator>
  );
};

export const SwitchNavigator = () => {
  return (
    <Switch.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={withNavigation(Home)} />
      <Stack.Screen name={Routes.Tab} component={AppNavigator} />
    </Switch.Navigator>
  );
};

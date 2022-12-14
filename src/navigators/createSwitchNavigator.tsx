/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropsWithChildren } from 'react';
import React from 'react';

import {
  createNavigatorFactory,
  TabRouter,
  useNavigationBuilder,
  NavigationHelpersContext,
} from '@react-navigation/native';
import { View } from 'react-native';

import { styles } from './styles';

type SwitchNavigatorProps = PropsWithChildren<{
  initialRouteName: string;
}>;

const SwitchNavigator = ({ initialRouteName, children }: SwitchNavigatorProps) => {
  const { state, descriptors, navigation } = useNavigationBuilder(TabRouter, {
    initialRouteName,
    children,
    screenOptions: {},
  });

  const { index, routes } = state;

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={styles.flex}>{descriptors[routes[index]?.key || 0]?.render()}</View>
    </NavigationHelpersContext.Provider>
  );
};

export const createSwitchNavigator = createNavigatorFactory(SwitchNavigator);

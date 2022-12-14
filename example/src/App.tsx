/* eslint-disable react/display-name */
/* eslint-disable import/no-default-export */
/* eslint-disable no-restricted-exports */

import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { RootNavigator } from './navigation';

enableScreens(true);

export default () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

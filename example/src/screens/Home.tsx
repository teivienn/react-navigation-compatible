import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NavigationCompatScreenProp } from 'react-navigation-compatible';

import { Routes } from '../navigation/routes';

export const Home = ({ navigation }: NavigationCompatScreenProp) => {
  return (
    <SafeAreaView edges={['top']}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Tab)}>
        <Text>go to tabs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import type { NavigationCompatScreenProp } from 'react-navigation-compatible';

import { Routes } from '../navigation/routes';

export const TabTwo = ({ navigation }: NavigationCompatScreenProp) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
        <Text>go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

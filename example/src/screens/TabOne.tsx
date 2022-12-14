import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import type { NavigationCompatScreenProp } from 'react-navigation-compatible';

import { Routes } from '../navigation/routes';

export const TabOne = ({ navigation }: NavigationCompatScreenProp) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Test, { id: 'hello', data: 232 })}
      >
        <Text>go to tabs</Text>
      </TouchableOpacity>
    </View>
  );
};

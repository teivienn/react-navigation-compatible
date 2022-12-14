import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationCompatScreenProp, NavigationEvents } from 'react-navigation-compatible';

export const Test = ({ navigation }: NavigationCompatScreenProp) => {
  const { params } = navigation.state;

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{JSON.stringify(params || {})}</Text>
      </TouchableOpacity>

      <NavigationEvents
        onWillBlur={() => console.log('onWillBlur')}
        onDidFocus={() => console.log('onDidFocus')}
        onDidBlur={() => console.log('onDidBlur')}
        onWillFocus={() => console.log('onWillFocus')}
      />
    </View>
  );
};

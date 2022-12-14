# react-navigation-compatible

Compatible layer for react-navigation v6 with v4

## Installation

```sh
yarn add react-navigation-compatible
```

## Usage

```js
import { createSwitchNavigator, withNavigation, NavigationEvents, useCompatNavigation } from 'react-navigation-compatible';

// ...

const Switch = createSwitchNavigator();

export const SwitchNavigator = () => {
  return (
    <Switch.Navigator initialRouteName={Routes.Home}>
        // Home screen used compatible navigation
      <Stack.Screen name={Routes.Home} component={withNavigation(Home)} />
      <Stack.Screen name={Routes.Tab} component={AppNavigator} />
    </Switch.Navigator>
  );
};

// ...

<NavigationEvents
  onWillBlur={() => console.log('onWillBlur')}
  onDidFocus={() => console.log('onDidFocus')}
  onDidBlur={() => console.log('onDidBlur')}
  onWillFocus={() => console.log('onWillFocus')}
/>

// ...

const navigation = useCompatNavigation();

const user = navigation.getParam('user') // or navigation.state.params.user


```


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NavigationProp, RouteProp, ParamListBase } from '@react-navigation/native';

export const createCompatNavigationProp = <
  Navigation extends NavigationProp<ReactNavigation.RootParamList>,
  ParamList extends RouteProp<ParamListBase, string>,
>(
  navigation: Navigation,
  route: ParamList,
) => {
  return {
    ...navigation,
    getParam: <RouteName extends keyof ReactNavigation.RootParamList>(
      paramName: keyof ReactNavigation.RootParamList[RouteName],
      defaultValue?: ReactNavigation.RootParamList[RouteName][typeof paramName],
    ): any => {
      const params = route.params;

      if (params && paramName in params) {
        // @ts-expect-error
        return params[paramName];
      }

      return defaultValue;
    },
    state: {
      key: route.key,
      routeName: route.name as string,
      params: (route.params ?? {}) as { [k: string]: any },
    },
  };
};

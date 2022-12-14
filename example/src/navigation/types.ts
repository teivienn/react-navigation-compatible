import type { ParamListBase } from '@react-navigation/native';

import type { Routes } from './routes';

export interface NavigationParamList extends ParamListBase {
  [Routes.Home]: undefined;
  [Routes.Test]: { id: string; data: number };
}

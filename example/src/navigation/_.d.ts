/* eslint-disable @typescript-eslint/no-empty-interface */
import { NavigationParamList } from './types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParamList {}
  }
}

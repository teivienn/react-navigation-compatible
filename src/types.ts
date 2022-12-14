import type { useCompatNavigation } from './hook/useCompatNavigation';

export type NavigationCompat = ReturnType<typeof useCompatNavigation>;

export type NavigationCompatScreenProp = {
  navigation: NavigationCompat;
};

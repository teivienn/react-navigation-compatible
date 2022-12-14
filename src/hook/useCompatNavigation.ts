import { useMemo } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { createCompatNavigationProp } from '../helpers/createCompatNavigationProp';

/**
 * @deprecated Please migrate to useNavigation
 */
export const useCompatNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return useMemo(() => createCompatNavigationProp(navigation, route), [navigation, route]);
};

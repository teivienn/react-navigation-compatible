import React from 'react';

import { useCompatNavigation } from '../hook/useCompatNavigation';

export interface WithNavigation {
  navigation: ReturnType<typeof useCompatNavigation>;
}

/**
 * @deprecated Please migrate to useNavigation
 */
export const withNavigation = <P extends object>(Component: React.ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const navigation = useCompatNavigation();

    return <Component {...props} navigation={navigation} />;
  };

  Wrapper.displayName = `withNavigation(${Component.displayName || Component.name})`;

  return Wrapper;
};

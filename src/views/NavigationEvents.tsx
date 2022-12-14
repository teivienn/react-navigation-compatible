import { useRef, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

type Props = {
  onWillFocus?: () => void;
  onDidFocus?: () => void;
  onWillBlur?: () => void;
  onDidBlur?: () => void;
};
/**
 * @deprecated Please migrate to useFocusEffect
 */
export const NavigationEvents = (props: Props) => {
  const navigation = useNavigation();
  const propsRef = useRef(props);

  useEffect(() => {
    propsRef.current = props;
  });

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      propsRef.current.onWillFocus?.();
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      propsRef.current.onWillBlur?.();
    });

    // @ts-expect-error: transitionEnd may not exist on this navigator
    const unsubscribeTransitionEnd = navigation.addListener('transitionEnd', () => {
      if (navigation.isFocused()) {
        propsRef.current.onDidFocus?.();
      } else {
        propsRef.current.onDidBlur?.();
      }
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
      unsubscribeTransitionEnd();
    };
  }, [navigation]);

  return null;
};

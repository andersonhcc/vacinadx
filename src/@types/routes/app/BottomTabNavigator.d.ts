import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
  export type BottomTabParamsList = {
    home: undefined;
    profile: undefined;
  };

  /**
   * useNavigation types
   */

  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabParamsList,
    'home'
  >;
}

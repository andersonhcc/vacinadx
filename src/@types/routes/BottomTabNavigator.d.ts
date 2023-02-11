import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeStackParamList} from './HomeNavigatorStack';

declare global {
  export type BottomTabParamsList = {
    home: NavigatorScreenParams<HomeStackParamList> | undefined;
  };

  /**
   * useNavigation types
   */

  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabParamsList,
    'home'
  >;
}

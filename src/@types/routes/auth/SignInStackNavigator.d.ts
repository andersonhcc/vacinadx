// import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignIntackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
  };

  /**
   * useNavigation types
   */

  export type SignIntackNavigatorProp = NativeStackNavigationProp<
    SignIntackParamList,
    'access'
  >;

  /**
   * useRoute types
   */

  // export type StoriesSignIntackRouteProp = RouteProp<
  //   HomeStackParamList,
  //   'acess'
  // >;
}

import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignIntackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
    signUpStep2: {
      email: string;
      firstName: string;
      lastName: string;
    };
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

  export type SignUpStep2StackRouteProp = RouteProp<
    SignIntackParamList,
    'signUpStep2'
  >;
}

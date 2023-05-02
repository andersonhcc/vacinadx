import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignedInStackParamsList = {
    BottomTabHome: undefined;
    VaccineDetail: {vaccine: any};
  };

  /* useNavigation types */

  export type SignedInStackNavigatorProp = NativeStackNavigationProp<
    SignedInStackParamsList,
    'BottomTabHome'
  >;

  /* useRoutes types */

  export type VaccineSignedInStackRouteProp = RouteProp<
    SignedInStackParamsList,
    'VaccineDetail'
  >;
}

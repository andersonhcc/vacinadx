import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type HomeStackParamList = {
    feed: undefined;
    stories: {para: string};
  };

  /**
   * useNavigation types
   */

  export type HomeStackNavigatorProp = NativeStackNavigationProp<
    HomeStackParamList,
    'feed'
  >;

  /**
   * useRoute types
   */

  export type StoriesHomeStackRouteProp = RouteProp<
    HomeStackParamList,
    'stories'
  >;
}

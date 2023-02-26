import {NameIconType} from '~/constants/icon';
import {PressableProps} from 'react-native';

export interface Props extends PressableProps {
  title: string;
  icon: NameIconType;
  onPress?: () => void;
}

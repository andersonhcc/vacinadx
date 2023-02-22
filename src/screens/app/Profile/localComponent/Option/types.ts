import {PressableProps} from 'react-native';
import {NameIconType} from '~/constants/icon';

export interface OptionProps extends PressableProps {
  title: string;
  icon: NameIconType;
}

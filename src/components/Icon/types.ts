import {ImageProps} from 'react-native/types';
import {NameIconType} from '../../constants/icon';

export interface IconOptionProps {
  icon: NameIconType;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}

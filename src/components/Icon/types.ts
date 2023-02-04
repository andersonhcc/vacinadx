import {ImageProps} from 'react-native/types';
import {NameIconType} from '../../constants/icon';
import {ColorsType} from 'styled-components/native';

export interface IconOptionProps {
  icon: NameIconType;
  size?: number;
  activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}

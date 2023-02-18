import {TextInputProps} from 'react-native/types';
import {ColorsType} from 'styled-components/native';
import {NameIconType} from '../../constants/icon';

export type IconPosition = 'left' | 'right';

export interface InputProps extends TextInputProps {
  color?: ColorsType;
  icon?: NameIconType;
  iconColor?: ColorsType;
  iconPosition?: IconPosition;
  label?: string;
  error?: string;
}

export interface InputValueRef {
  value: string;
  focus?: () => void;
  blur?: () => void;
  setValue?: (value: string) => void;
}

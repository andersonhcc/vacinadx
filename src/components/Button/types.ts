import {TouchableOpacityProps} from 'react-native/types';
import {ColorsType} from 'styled-components/native';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
}

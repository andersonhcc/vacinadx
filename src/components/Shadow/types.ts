import {ReactNode} from 'react';
import {PressableProps} from 'react-native';

export interface ShadowProps extends PressableProps {
  children: ReactNode;
}

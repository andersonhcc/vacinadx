import React from 'react';
import {TouchableOpacityProps} from 'react-native/types';
import {ColorsType, TypographyType} from 'styled-components/native';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color?: ColorsType;
  mode?: Mode;
  icon?: React.ReactNode;
  typography?: TypographyType;
  loading?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

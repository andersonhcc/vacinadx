import React from 'react';
import {TextProps} from 'react-native/types';
import {ColorsType, TypographyType} from 'styled-components/native';

export interface Props extends TextProps {
  children: string | React.ReactNode;
  color?: ColorsType;
  typography?: TypographyType;
}

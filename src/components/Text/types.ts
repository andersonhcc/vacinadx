import {TextProps} from 'react-native/types';
import {ColorsType, TypographyType} from 'styled-components/native';

export interface Props extends TextProps {
  children: string;
  color?: ColorsType;
  typography?: TypographyType;
}

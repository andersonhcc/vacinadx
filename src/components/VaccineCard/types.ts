import {PressableProps} from 'react-native';

export interface VaccineCardProps extends PressableProps {
  title: string;
  shot: 'single-dose' | 'first-dose' | 'second-dose';
  date: string;
}

/**
 * Styles
 */

export interface BadgeLeftProps {
  color: string;
}

export interface ChipProps {
  color: string;
}

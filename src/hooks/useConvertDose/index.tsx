import {useMemo} from 'react';
import {useTheme} from 'styled-components';
import {Props} from './types';

const useConvertDose = ({shot}: Props) => {
  const {colors} = useTheme();

  const dose = useMemo(() => {
    switch (shot) {
      case 'first-dose':
        return {
          color: colors.primary.main,
          title: '1º dose',
        };
      case 'second-dose':
        return {
          color: colors.orange.main,
          title: '2º dose',
        };
      default:
        return {
          color: colors.secondary.main,
          title: 'dose única',
        };
    }
  }, [shot, colors]);

  return dose;
};

export {useConvertDose};

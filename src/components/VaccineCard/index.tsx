import React, {useMemo} from 'react';

import {BadgeLeft, Container, ChipWrap, Chip, VaccineDate} from './styles';
import {Text} from '../Text';
import {View} from 'react-native';
import {Separator} from '../Separator';
import Icon from '../Icon';
import {VaccineCardProps} from './types';
import {format, isBefore} from 'date-fns';
import {useTheme} from 'styled-components';
import {Shadow} from '../Shadow';
import {useConvertDose} from '~/hooks/useConvertDose';

const VaccineCard = ({date, shot, title, ...rest}: VaccineCardProps) => {
  const {colors} = useTheme();

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(date), new Date());
  }, [date]);

  const formattedDate = useMemo(() => {
    return format(new Date(date), 'dd/MM/yy');
  }, [date]);

  const dose = useConvertDose({shot});

  return (
    <Shadow {...rest}>
      <Container>
        <BadgeLeft
          color={isBeforeToday ? colors.lightGreen.main : colors.orange.main}
        />
        <View>
          <Text typography="body2">{title}</Text>
          <Separator height={18} />
          <ChipWrap>
            <Chip color={dose.color}>
              <Text color="background">{dose.title}</Text>
            </Chip>
          </ChipWrap>
        </View>
        <VaccineDate>
          <Icon icon="calendar" />
          <Separator width={12} />
          <Text>{formattedDate}</Text>
        </VaccineDate>
      </Container>
    </Shadow>
  );
};

export {VaccineCard};

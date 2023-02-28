import React from 'react';
import {Separator} from '~/components/Separator';

import {Container} from './styles';
import {SelectProps} from './types';
import {useTheme} from 'styled-components';
import {Text} from '~/components/Text';
import Icon from '~/components/Icon';

const Select = ({title, isSelected, onPress}: SelectProps) => {
  const {spacing} = useTheme();
  return (
    <Container onPress={onPress}>
      <Icon icon={isSelected ? 'radioButtonCheck' : 'radioButtonNoCheck'} />
      <Separator width={spacing.sm} />
      <Text color="surface600" typography="body3">
        {title}
      </Text>
    </Container>
  );
};

export {Select};

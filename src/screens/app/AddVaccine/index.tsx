import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import {useTheme} from 'styled-components';

import {Container} from './styles';
import Icon from '~/components/Icon';
import {Text} from '~/components/Text';

const AddVaccine: React.FC = () => {
  const {spacing} = useTheme();
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Separator height={spacing.md} />
      <Pressable>
        <Icon icon="back" />
      </Pressable>
      <Separator height={spacing.sm} />
      <Text typography="h7">Adicionar vacina</Text>
    </Container>
  );
};

export {AddVaccine};

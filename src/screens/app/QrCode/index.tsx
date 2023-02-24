import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {Container} from './styles';
import {useTheme} from 'styled-components';
import {Separator} from '~/components/Separator';
import Icon from '~/components/Icon';
import {useNavigation} from '@react-navigation/native';
import {Text} from '~/components/Text';

const QrCode: React.FC = () => {
  const {spacing} = useTheme();
  const {goBack} = useNavigation();
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="closeX" size={15} />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Ler QR code</Text>
      <Separator height={spacing.sm} />
      <Text typography="caption">Posicione o código QR dentro da àrea</Text>
      <Separator height={spacing.lg} />
    </Container>
  );
};

export {QrCode};

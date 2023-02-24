import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import {useTheme} from 'styled-components';

import {Container, Card, Row} from './styles';
import Icon from '~/components/Icon';
import {Text} from '~/components/Text';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from '~/components/Shadow';

const AddVaccine: React.FC = () => {
  const {spacing} = useTheme();
  const {goBack, navigate} = useNavigation();

  const handleGoToQrCode = () => {
    navigate('QrCode');
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Separator height={spacing.md} />
      <Pressable onPress={goBack}>
        <Icon icon="back" size={15} />
      </Pressable>
      <Separator height={spacing.md} />
      <Text typography="h7">Adicionar vacina</Text>
      <Separator height={spacing.sm} />
      <Text>{'Gostaria de adicionar por meio de \nqual método?'}</Text>
      <Separator height={spacing.lg} />
      <Shadow>
        <Card>
          <Row>
            <Icon icon="pencil" size={22} />
            <Separator width={spacing.md} />
            <Text typography="caption">Inserção manual</Text>
          </Row>
          <Icon icon="arrowRight" />
        </Card>
      </Shadow>
      <Separator height={spacing.md} />

      <Shadow onPress={handleGoToQrCode}>
        <Card>
          <Row>
            <Icon icon="qrcode" size={22} />
            <Separator width={spacing.md} />
            <Text typography="caption">Leitura de código QR</Text>
          </Row>
          <Icon icon="arrowRight" />
        </Card>
      </Shadow>
    </Container>
  );
};

export {AddVaccine};

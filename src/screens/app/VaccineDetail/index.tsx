import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {HeaderOptions} from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {ScrollView} from 'react-native';
import {Center} from '~/components/Center';
import {Text} from '~/components/Text';

import {
  Container,
  Content,
  LogoVaccine,
  RowTextDetail,
  RowVaccine,
} from './styles';
import {Shadow} from '~/components/Shadow';
import {useConvertDose} from '~/hooks/useConvertDose';
import {getRandomImageUnsplash} from '~/constants/unsplash';
import {useRoute} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

const VaccineDetail: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing, colors} = useTheme();
  const {
    params: {vaccine},
  } = useRoute<VaccineSignedInStackRouteProp>();

  /* CALLBACKS */

  const dose = useConvertDose({shot: vaccine.shot});

  /* MEMOS */
  const randomImage = useMemo(() => {
    return getRandomImageUnsplash(100);
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <HeaderOptions
        left={
          <Pressable onPress={goBack}>
            <Icon icon="closeX" size={15} />
          </Pressable>
        }
      />
      <Separator height={spacing.md} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text typography="h7">Detalhes da vacina</Text>
        <Separator height={spacing.md} />
        <Shadow>
          <Content>
            <RowVaccine>
              <LogoVaccine resizeMode="contain" source={{uri: randomImage}} />
              <Separator width={spacing.md} />
              <Text typography="subtitle2">{vaccine.title}</Text>
            </RowVaccine>
            <RowTextDetail>
              <Icon
                icon="vaccine"
                size={24}
                activeColor={colors.primary.main}
              />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Vacina
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">HPV</Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon
                icon="calendar"
                size={24}
                activeColor={colors.primary.main}
              />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Data da aplicação
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">25/05</Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon icon="pin" size={24} activeColor={colors.primary.main} />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Local da aplicação
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">25/05</Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon icon="dose" size={24} activeColor={colors.primary.main} />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Doses
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">{dose.title}</Text>
            </RowTextDetail>
            <Separator height={spacing.md} />
            <RowTextDetail>
              <Center>
                <QRCode value="1232122323232" />
              </Center>
            </RowTextDetail>
          </Content>
        </Shadow>
        <Separator height={spacing.lg} />
      </ScrollView>
    </Container>
  );
};

export {VaccineDetail};

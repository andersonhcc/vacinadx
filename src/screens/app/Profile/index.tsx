import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Text} from '~/components/Text';
import {useTheme} from 'styled-components';
import useAuth from '~/hooks/useAuth';
import {Option} from './localComponent/Option';

import {Avatar, Container, Row, CardOption, Divider} from './styles';
import {Separator} from '~/components/Separator';
import {Shadow} from '~/components/Shadow';

const Profile: React.FC = () => {
  const {spacing} = useTheme();
  const {user, signOut} = useAuth();
  return (
    <Container>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <Separator height={spacing.lg} />
        <Text typography="h5">Perfil</Text>
        <Separator height={spacing.lg} />
        <Row>
          <Avatar source={{uri: user?.avatar}} />
          <Separator width={spacing.sm} />
          <View>
            <Text typography="h8">Anderson</Text>
            <Text typography="h8">{user?.lastName}</Text>
          </View>
        </Row>
        <Separator height={spacing.lg} />
        <Shadow>
          <CardOption>
            <Option title="Informações pessoais" icon="profile" />
            <Divider />
            <Option title="Suporte" icon="support" />
            <Divider />
            <Option title="Sair" icon="logout" onPress={signOut} />
          </CardOption>
        </Shadow>
      </ScrollView>
    </Container>
  );
};

export {Profile};

import React from 'react';
import {View} from 'react-native';
import headerImage from '~/assets/images/header.png';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';
import useAuth from '~/hooks/useAuth';
import {useTheme} from 'styled-components';
import {Container, Avatar, Row} from './styles';

const Header: React.FC = () => {
  const {user} = useAuth();
  const {spacing} = useTheme();
  return (
    <Container source={headerImage}>
      <Row>
        <View>
          <Text typography="h5">Bem vindx</Text>
          <Text typography="h6">{user?.firstName}</Text>
          <Avatar source={{uri: user?.avatar}} />
        </View>
      </Row>
      <Separator height={spacing.xs} />
    </Container>
  );
};

export {Header};

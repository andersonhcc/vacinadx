import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  ContainerRounded,
  Column,
  IconRoundedVaccine,
  IconVaccine,
} from './styles';

import splashImage from '~/assets/images/splash/splashScreen.png';
import {Text} from '~/components/Text';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {useTheme} from 'styled-components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useSignInNavigation from '~/hooks/useSignInNavigator';

const Acess: React.FC = () => {
  const {bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   *
   */

  const handleNavigationToLogin = () => {
    navigation.navigate('login');
  };

  const handleNavigationToSignUp = () => {
    navigation.navigate('signUp');
  };

  return (
    <Container source={splashImage}>
      <StatusBar barStyle="light-content" />

      <Column>
        <IconRoundedVaccine>
          <IconVaccine icon="vaccinePlus" size={80} />
        </IconRoundedVaccine>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadx
        </Text>
      </Column>

      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text typography="h4">Bem vindx</Text>
        <Separator height={spacing.sm} />
        <Text typography="subtitle1">Acesse ao app</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigationToLogin}>Login</Button>
        <Separator height={spacing.lg} />
        <Button mode="outlined" onPress={handleNavigationToSignUp}>
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxxl} />
      </ContainerRounded>
    </Container>
  );
};

export {Acess};

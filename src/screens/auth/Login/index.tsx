import React from 'react';
import {HeaderOptions} from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {useTheme} from 'styled-components';
import {Text} from '~/components/Text';
import Input from '~/components/Input';

import {Container, AcessText, PressableX} from './styles';
import {Button} from '~/components/Button';
import {StatusBar} from 'react-native';
import useSignInNavigation from '~/hooks/useSignInNavigator';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderOptions
        left={
          <PressableX onPress={handleGoBack}>
            <Icon size={15} icon="closeX" />
          </PressableX>
        }
        right={
          <Text color="primary" typography="body3">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>
      <Separator height={spacing.md} />
      <Input label="Email" icon="checkCircle" iconColor="primary" />
      <Input label="Senha" secureTextEntry iconColor="primary" />
      <Separator height={spacing.md} />
      <Button>Login</Button>
      <Separator height={spacing.md} />
      <AcessText color="surface500" typography="body3">
        ou acesse com login social
      </AcessText>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="apple" />}
        color="secondary"
        mode="outlined">
        Continuar com a Apple
      </Button>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="google" />}
        color="secondary"
        mode="outlined">
        Continuar com o Google
      </Button>
    </Container>
  );
};

export {Login};

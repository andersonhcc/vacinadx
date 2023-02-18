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
import {Controller, useForm} from 'react-hook-form';
import {schemaLogin} from './validation';
import {yupResolver} from '@hookform/resolvers/yup';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Forms
   */

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * Callback
   */

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    await handleSubmit(
      ({email, password}) => {
        console.log(email, password);
      },
      () => console.log('form error'),
    )();
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

      <Controller
        name="email"
        control={control}
        render={({field: {ref, onBlur, onChange, value}}) => (
          <Input
            ref={ref}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onBlur={onBlur}
            onChange={onChange}
            onChangeText={text => setValue('email', text)}
            value={value}
            label="Email"
            icon="checkCircle"
            iconColor="primary"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({field: {ref, onBlur, onChange, value}}) => (
          <Input
            ref={ref}
            autoCapitalize="none"
            autoComplete="password"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            label="Senha"
            secureTextEntry
            iconColor="primary"
            error={errors.password?.message}
          />
        )}
      />

      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Login</Button>
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

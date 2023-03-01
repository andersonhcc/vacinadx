import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useTheme} from 'styled-components';
import {Text} from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigator';
import {schemaSignUpStep2} from './validation';

import {Container} from './styles';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StatusBar, useWindowDimensions} from 'react-native';
import {HeaderOptions} from '~/components/HeaderOptions';
import {Separator} from '~/components/Separator';
import Input from '~/components/Input';
import {Button} from '~/components/Button';
import * as Progress from 'react-native-progress';
import {BackButton} from '~/components/BackButton';
import {useRoute} from '@react-navigation/native';
import useAuth from '~/hooks/useAuth';
import {AvoidKeyboard} from '~/components/AvoidKeyboard';

const SignUpStep2 = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();
  const {
    params: {email, firstName, lastName},
  } = useRoute<SignUpStep2StackRouteProp>();

  /**
   * Hooks
   */

  const {signUp, loading} = useAuth();

  /**
   * Forms
   */

  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaSignUpStep2),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  /**
   * Memos
   */

  const widthProgressBar = useMemo(() => {
    const pressableXWidth = 35;
    const marginScreenWidth = spacing.md * 3;
    const centerHeaderOptionWidth = spacing.md;
    const value =
      width - (marginScreenWidth + pressableXWidth + centerHeaderOptionWidth);
    return value;
  }, [width, spacing]);

  /**
   * Callback
   */

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    await handleSubmit(
      async ({password, confirmPassword}) => {
        await signUp({email, firstName, lastName, password});
      },
      () => console.log('form error'),
    )();
  };

  return (
    <AvoidKeyboard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <HeaderOptions
            left={<BackButton icon="back" onPress={handleGoBack} />}
            center={<Separator width={spacing.md} />}
            right={
              <Progress.Bar
                progress={1}
                color={colors.primary.main}
                unfilledColor={colors.surface50.main}
                borderWidth={0}
                height={6}
                width={widthProgressBar}
              />
            }
          />
          <Separator height={spacing.md} />
          <Text typography="h3">Cadastro</Text>
          <Separator height={spacing.md} />
          <Text color="surface100" typography="caption">
            {'Sua senha precisa ter pelo menos  \n8 caracteres'}
          </Text>
          <Separator height={spacing.md} />
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
                onChangeText={text => setValue('password', text)}
                value={value}
                label="Senha"
                secureTextEntry
                iconColor="primary"
                error={errors.password?.message}
                onSubmitEditing={() => {
                  setFocus('confirmPassword');
                }}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({field: {ref, onBlur, onChange, value}}) => (
              <Input
                ref={ref}
                autoCapitalize="none"
                autoComplete="password"
                onBlur={onBlur}
                onChangeText={text => setValue('confirmPassword', text)}
                onChange={onChange}
                value={value}
                label="Confirmar senha"
                secureTextEntry
                iconColor="primary"
                error={errors.confirmPassword?.message}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />

          <Separator height={spacing.md} />
          <Button onPress={onSubmit} loading={loading} disabled={loading}>
            Finalizar
          </Button>
        </Container>
      </ScrollView>
    </AvoidKeyboard>
  );
};

export {SignUpStep2};

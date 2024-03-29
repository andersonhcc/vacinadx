import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useTheme} from 'styled-components';
import {Text} from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigator';
import {schemaSignUp} from './validation';

import {Container} from './styles';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StatusBar, useWindowDimensions} from 'react-native';
import {HeaderOptions} from '~/components/HeaderOptions';
import {Separator} from '~/components/Separator';
import Input from '~/components/Input';
import {Button} from '~/components/Button';
import * as Progress from 'react-native-progress';
import {BackButton} from '~/components/BackButton';
import {AvoidKeyboard} from '~/components/AvoidKeyboard';

const SignUp = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();

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
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
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
      ({email, firstName, lastName}) => {
        console.log(email, firstName, lastName);
        navigation.navigate('signUpStep2', {email, firstName, lastName});
      },
      () => console.log('form error'),
    )();
  };

  return (
    <AvoidKeyboard>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <HeaderOptions
            left={<BackButton icon="closeX" onPress={handleGoBack} />}
            center={<Separator width={spacing.md} />}
            right={
              <Progress.Bar
                progress={0.5}
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
            Informações pessoais
          </Text>
          <Separator height={spacing.md} />
          <Controller
            name="firstName"
            control={control}
            render={({field: {ref, onBlur, onChange, value}}) => (
              <Input
                ref={ref}
                autoCapitalize="none"
                onBlur={onBlur}
                onChange={onChange}
                onChangeText={text => setValue('firstName', text)}
                value={value}
                label="Nome"
                error={errors.firstName?.message}
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('lastName');
                }}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({field: {ref, onBlur, onChange, value}}) => (
              <Input
                ref={ref}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={text => setValue('lastName', text)}
                onChange={onChange}
                value={value}
                label="Sobrenome"
                error={errors.lastName?.message}
                returnKeyType="next"
                onSubmitEditing={() => {
                  setFocus('email');
                }}
              />
            )}
          />

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
                error={errors.email?.message}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
          />

          <Separator height={spacing.md} />
          <Button onPress={onSubmit}>Continuar</Button>
        </ScrollView>
      </Container>
    </AvoidKeyboard>
  );
};

export {SignUp};

import React, {useState} from 'react';

import {Container, ContainerSelect, Content, Scroll} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {HasSecondSHotEnum} from './types';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {getSchema} from './validation';
import {Pressable, StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import Icon from '~/components/Icon';
import {Text} from '~/components/Text';
import Input from '~/components/Input';
import {Button} from '~/components/Button';
import {Select} from './localComponents/Select';

const AddVaccineManually: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();
  const [hasSecondShot, setHasSecondShot] = useState(HasSecondSHotEnum.YES);

  /**
   * Forms
   */

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    setFocus,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(getSchema),
    defaultValues: {
      name: '',
      brand: '',
      applicationDate: '',
      applicationLocation: '',
      nextApplicationDate: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(async dataForms => {})();
  };

  return (
    <Container>
      <Scroll>
        <StatusBar barStyle="dark-content" />
        <Content>
          <Separator height={spacing.md} />
          <Pressable onPress={goBack}>
            <Icon icon="closeX" size={15} />
          </Pressable>
          <Separator height={spacing.md} />
          <Text typography="h7">Adicione as informações da vacina</Text>
          <Separator height={spacing.lg} />
          <Controller
            control={control}
            name="name"
            render={({field: {name, onBlur, onChange, ref, value}}) => (
              <Input
                label="Nome da vacina"
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text => setValue(name, text)}
                error={errors[name]?.message}
                onFocus={() => setFocus(name)}
              />
            )}
          />

          <Controller
            control={control}
            name="brand"
            render={({field: {name, onBlur, onChange, ref, value}}) => (
              <Input
                label="Marca da vacina"
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text => setValue(name, text)}
                error={errors[name]?.message}
                onFocus={() => setFocus(name)}
              />
            )}
          />

          <Controller
            control={control}
            name="applicationDate"
            render={({field: {name, onBlur, onChange, ref, value}}) => (
              <Input
                label="Data da aplicação"
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text => setValue(name, text)}
                error={errors[name]?.message}
                onFocus={() => setFocus(name)}
              />
            )}
          />

          <Controller
            control={control}
            name="applicationLocation"
            render={({field: {name, onBlur, onChange, ref, value}}) => (
              <Input
                label="Local da aplicação"
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text => setValue(name, text)}
                error={errors[name]?.message}
                onFocus={() => setFocus(name)}
              />
            )}
          />
          <Separator height={spacing.md} />
          <Text color="surface600" typography="body3">
            Possui segunda dose?
          </Text>
          <Separator height={spacing.sm} />
          <ContainerSelect>
            <Select
              onPress={() => setHasSecondShot(HasSecondSHotEnum.YES)}
              isSelected={hasSecondShot === HasSecondSHotEnum.YES}
              title="Sim"
            />

            <Select
              onPress={() => setHasSecondShot(HasSecondSHotEnum.NO)}
              isSelected={hasSecondShot === HasSecondSHotEnum.NO}
              title="Não"
            />

            <Select
              onPress={() => setHasSecondShot(HasSecondSHotEnum.SINGLE)}
              isSelected={hasSecondShot === HasSecondSHotEnum.SINGLE}
              title="Dose única"
            />
          </ContainerSelect>
          {hasSecondShot === HasSecondSHotEnum.YES && (
            <Controller
              control={control}
              name="nextApplicationDate"
              render={({field: {name, onBlur, onChange, ref, value}}) => (
                <Input
                  label="Data da próxima aplicação"
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onChangeText={text => setValue(name, text)}
                  error={errors[name]?.message}
                  onFocus={() => setFocus(name)}
                />
              )}
            />
          )}
          <Separator height={spacing.md} />
          <Button onPress={onSubmit}>Salvar</Button>
          <Separator height={spacing.lg} />
        </Content>
      </Scroll>
    </Container>
  );
};

export {AddVaccineManually};

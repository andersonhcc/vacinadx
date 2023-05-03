import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {HeaderOptions} from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import {Separator} from '~/components/Separator';
import {Container, RowFilterVaccine} from './styles';
import {FilterVaccine} from './types';
import {Button} from '~/components/Button';
import {Text} from '~/components/Text';
import {VaccineCard} from '~/components/VaccineCard';

const MyVaccine: React.FC = () => {
  const {goBack, navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {spacing} = useTheme();

  const [toggleFilter, setToggleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');

  const handleToggleFilter = () => {
    setToggleFilter(old => (old === 'all' ? 'next' : 'all'));
  };

  const handleNavigateToVaccineDetail = vaccine =>
    navigate('VaccineDetail', {vaccine});

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={
          <Pressable onPress={goBack}>
            <Icon icon="back" size={15} />
          </Pressable>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h7">Minhas vacinas</Text>
      <Separator height={spacing.md} />
      <Input
        icon="search"
        iconPosition="left"
        iconColor="lightGreen"
        placeholder="Busca de vacina"
        onChangeText={setSearchInput}
        value={searchInput}
      />

      <Separator height={spacing.ty} />
      <RowFilterVaccine>
        <Button
          mode={toggleFilter === 'all' ? 'contained' : 'outlined'}
          paddingHorizontal={20}
          paddingVertical={8}
          onPress={handleToggleFilter}>
          Todos
        </Button>
        <Separator width={12} />
        <Button
          mode={toggleFilter === 'next' ? 'contained' : 'outlined'}
          paddingHorizontal={20}
          paddingVertical={8}
          onPress={handleToggleFilter}>
          Próximas vacinas
        </Button>
      </RowFilterVaccine>
      <Separator height={15} />
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={item => `${item}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListEmptyComponent={() => <Separator height={15} />}
        ListHeaderComponent={() => <Separator height={15} />}
        renderItem={({item}) => {
          return (
            <VaccineCard
              onPress={() =>
                handleNavigateToVaccineDetail({
                  shot: 'second-dose',
                  title: 'Jhonsons',
                })
              }
              key={item}
              date={new Date(2022, 21, 5).toISOString()}
              shot={item % 2 === 0 ? 'second-dose' : 'first-dose'}
              shot={item % 2 === 0 ? 'second-dose' : 'first-dose'}
            />
          );
        }}
      />
    </Container>
  );
};

export {MyVaccine};

/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useEffect, useState} from 'react';

import {Container, ScrollViewItems, Content} from './styles';
import {Header} from './localComponents/Header';
import {SmallCard} from './localComponents/SmallCard';
import {Alert, StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import {VaccineCard} from '~/components/VaccineCard';
import {Text} from '~/components/Text';
import {Banner} from './localComponents/Banner';
import {useNavigation} from '@react-navigation/native';
import {VaccineDTO} from '~/@types/dtos/vaccine';
import useAuth from '~/hooks/useAuth';
import {getVaccines} from '~/services/resource/Vaccine';
import {isAfter} from 'date-fns';
import {spacing} from '~/constants/styles/themes/common';
import {FlatList, RefreshControl} from 'react-native';
import Empty from '~/components/Empty';

const Home: React.FC = () => {
  const {navigate} = useNavigation<SignedInStackNavigatorProp>();
  const {user} = useAuth();

  /**
   * STATES
   */

  const [vaccines, setVaccines] = useState<VaccineDTO[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * CALLBACKS
   */

  const handleNavigationAddVacine = () => {
    navigate('AddVaccine');
  };
  const handleNavigationMyVaccine = () => {
    navigate('MyVaccine');
  };
  const handleNavigationVaccineOnMaps = () => {
    navigate('VaccineOnMap');
  };

  const handleFetchVaccines = useCallback(async () => {
    if (user) {
      try {
        setLoading(true);
        const response = await getVaccines({userId: user.id});
        setVaccines(
          response.filter(e =>
            isAfter(new Date(e.nextApplicationDate), new Date()),
          ),
        );
      } catch (err) {
        console.log(err);
        Alert.alert('Ops', 'Não foi possível carregar as vacinas');
      } finally {
        setLoading(false);
      }
    }
  }, [user]);

  useEffect(() => {
    handleFetchVaccines();
  }, [handleFetchVaccines]);

  const handleVaccineOnMaps = () => navigate('VaccineOnMaps');

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <ScrollViewItems horizontal showsHorizontalScrollIndicator={false}>
        <SmallCard
          icon="vaccine"
          onPress={handleNavigationMyVaccine}
          title={'Minhas\nvacinas'}
        />
        <Separator width={15} />
        <SmallCard
          icon="plus"
          onPress={handleNavigationAddVacine}
          title={'Adicionar\nvacinas'}
        />
        <Separator width={15} />
        <SmallCard
          icon="pin"
          title={'Procurar local\n de vacinação'}
          onPress={handleNavigationVaccineOnMaps}
        />
      </ScrollViewItems>
      <FlatList
        data={vaccines}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Content>
            <VaccineCard
              date={item.createdAt}
              shot={item.dose}
              title={item.name}
            />
          </Content>
        )}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleFetchVaccines}
          />
        }
        ListHeaderComponent={() => {
          return (
            <>
              <Header />
              <ScrollViewItems horizontal>
                <Separator width={spacing.md} />
                <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
                <Separator width={15} />
                <SmallCard icon="plus" title={'Adicionar\nvacinas'} />
                <Separator width={15} />
                <SmallCard
                  icon="pin"
                  title={'Procurar local\n de vacinação'}
                  onPress={handleVaccineOnMaps}
                />
                <Separator width={spacing.md} />
              </ScrollViewItems>
              <Content>
                <Text typography="h8">Próximas vacinas </Text>
                <Separator height={15} />
              </Content>
            </>
          );
        }}
        ListFooterComponent={() => {
          return (
            <Content>
              <Separator height={15} />
              <Text typography="h8">Campanhas de vacinação</Text>
              <Separator height={15} />
              <Banner source={require('~/assets/images/banner/covid.png')} />
              <Separator height={15} />
            </Content>
          );
        }}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListEmptyComponent={() => (
          <Empty title="Você não possui novas vacinas" />
        )}
      />
    </Container>
  );
};

export {Home};

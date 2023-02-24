import React from 'react';

import {Container, ScrollViewItems, Content} from './styles';
import {Header} from './localComponents/Header';
import {SmallCard} from './localComponents/SmallCard';
import {StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import {VaccineCard} from '~/components/VaccineCard';
import {Text} from '~/components/Text';
import {Banner} from './localComponents/Banner';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const handleAddVacine = () => {
    navigate('AddVaccine');
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <ScrollViewItems horizontal showsHorizontalScrollIndicator={false}>
        <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
        <Separator width={15} />
        <SmallCard
          icon="plus"
          onPress={handleAddVacine}
          title={'Adicionar\nvacinas'}
        />
        <Separator width={15} />
        <SmallCard icon="pin" title={'Procurar local\n de vacinação'} />
      </ScrollViewItems>
      <Content>
        <Text typography="h8">Próximas vacinas</Text>
        <Separator height={15} />
        <VaccineCard
          title="Tríplice viral"
          shot="first-dose"
          date={new Date().toISOString()}
        />
        <Separator height={15} />
        <VaccineCard
          title="Febre amarela"
          shot="single-dose"
          date={new Date(2022, 4, 1).toISOString()}
        />
        <Separator height={15} />
        <Text typography="h8">Campanhas de vacinação</Text>
        <Separator height={15} />
        <Banner source={require('~/assets/images/banner/covid.png')} />
      </Content>
    </Container>
  );
};

export {Home};

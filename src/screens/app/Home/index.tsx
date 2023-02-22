import React from 'react';

import {Container, ScrollViewItems, Content} from './styles';
import {Header} from './localComponents/Header';
import {SmallCard} from './localComponents/SmallCard';
import {StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';
import {VaccineCard} from '~/components/VaccineCard';
import {Text} from '~/components/Text';
import {Banner} from './localComponents/Banner';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header />
      <ScrollViewItems horizontal>
        <SmallCard icon="vaccine" title={'Minhas\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="plus" title={'Adicionar\nvacinas'} />
        <Separator width={15} />
        <SmallCard icon="pin" title={'Procurar local\n de vacinação'} />
      </ScrollViewItems>
      <Content>
        <Text typography="h7">Próximas vacinas</Text>
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
        <Text>Campanhas de vacinação</Text>
        <Separator height={15} />
        <Banner source={require('~/assets/images/banner/covid.png')} />
      </Content>
    </Container>
  );
};

export {Home};

import React from 'react';

import {Container, ScrollViewItems} from './styles';
import {Header} from './localComponents/Header';
import {SmallCard} from './localComponents/SmallCard';
import {StatusBar} from 'react-native';
import {Separator} from '~/components/Separator';

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
    </Container>
  );
};

export {Home};

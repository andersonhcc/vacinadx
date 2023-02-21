import React from 'react';
// import {View} from 'react-native';

import {Container} from './styles';
import {Header} from './localComponents/Header';
import {StatusBar} from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header />
    </Container>
  );
};

export {Home};

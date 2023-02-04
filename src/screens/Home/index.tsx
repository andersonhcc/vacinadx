import React from 'react';
import {Container} from './styles';
import {Text} from '../../components/Text';
import {Icon} from '../../components/Icon';

const Home: React.FC = () => {
  return (
    <Container>
      <Text color="error">Oi</Text>
      <Icon icon="dog" size={100} activeColor="orange" />
    </Container>
  );
};

export {Home};

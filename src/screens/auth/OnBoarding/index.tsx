import React, {useState} from 'react';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';
import {useTheme} from 'styled-components';

import {Container, Person, ContainerColumn} from './styles';
import {useWindowDimensions} from 'react-native/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useSignInNavigation from '~/hooks/useSignInNavigator';

const OnBoarding: React.FC = () => {
  const {spacing} = useTheme();

  const {height} = useWindowDimensions();
  const {bottom, top} = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /**
   * State
   */
  const [heightPerson, setHeightPerson] = useState(0);

  /**
   * Callback
   */

  const handleNavigationToAcessScreen = () => {
    navigation.navigate('access');
  };

  const handleHeightToPerson = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + bottom + top + 60);
    setHeightPerson(freeSpace);
  };

  return (
    <Container>
      <Separator height={spacing.sm} />

      <Person size={heightPerson} icon="doctor" />

      <ContainerColumn
        onLayout={e => handleHeightToPerson(e.nativeEvent.layout.height)}>
        <Separator height={spacing.md} />

        <Text typography="h4">
          Bem vindx ao <Text typography="h3">Vacinadx</Text>
        </Text>

        <Separator height={spacing.xxl} />

        <Text typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Text>

        <Separator height={spacing.xxxl} />
        <Button onPress={handleNavigationToAcessScreen}>Começar</Button>
        <Separator height={spacing.md} />
      </ContainerColumn>
    </Container>
  );
};

export {OnBoarding};

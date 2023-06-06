import React from 'react';

import {Container, ContainerDescriptions, ImageLocal} from './styles';
import {CardMapProps} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import {Text} from '~/components/Text';
import {Separator} from '~/components/Separator';

const CardMaps = ({distance, image, title}: CardMapProps) => {
  const {bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();
  return (
    <Container bottom={bottom}>
      <ImageLocal source={image} />
      <Separator width={spacing.sm} />
      <ContainerDescriptions>
        <Text typography="overline">{title}</Text>
        <Separator height={spacing.sm} />
        <Text>{distance}</Text>
      </ContainerDescriptions>
    </Container>
  );
};

export {CardMaps};

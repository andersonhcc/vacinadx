import React from 'react';
import Icon from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {Pressable} from 'react-native';
import styles, {Container, Circle, Title} from './styles';
import {Props} from './types';

const SmallCard = ({icon, title, ...rest}: Props) => {
  return (
    <Pressable style={styles.shadow} {...rest}>
      <Container>
        <Circle>
          <Icon size={20} activeColor="white" icon={icon} />
        </Circle>
        <Separator height={15} />
        <Title>{title}</Title>
      </Container>
    </Pressable>
  );
};

export {SmallCard};

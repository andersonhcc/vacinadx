import React from 'react';
import Icon from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {Container, Circle, Title} from './styles';
import {Props} from './types';
import {Shadow} from '~/components/Shadow';

const SmallCard = ({icon, title, ...rest}: Props) => {
  return (
    <Shadow {...rest}>
      <Container>
        <Circle>
          <Icon size={20} activeColor="white" icon={icon} />
        </Circle>
        <Separator height={15} />
        <Title>{title}</Title>
      </Container>
    </Shadow>
  );
};

export {SmallCard};

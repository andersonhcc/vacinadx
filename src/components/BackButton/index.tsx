import React from 'react';
import Icon from '../Icon';

import {Container} from './styles';
import {Props} from './types';

const BackButton = ({icon, ...rest}: Props) => {
  return (
    <Container {...rest}>
      <Icon icon={icon} size={15} />
    </Container>
  );
};

export {BackButton};

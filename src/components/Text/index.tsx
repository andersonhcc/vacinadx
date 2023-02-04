import React from 'react';

import {Container} from './styles';
import {Props} from './types';

const Text = ({children, typography, color, ...rest}: Props) => {
  return (
    <Container
      color={color || 'surface'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
};

export {Text};

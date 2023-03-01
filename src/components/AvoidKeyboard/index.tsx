import React from 'react';

import {Container} from './styles';
import {AvoidKeyboardProps} from './types';

const AvoidKeyboard = ({children}: AvoidKeyboardProps) => {
  return <Container>{children}</Container>;
};

export {AvoidKeyboard};

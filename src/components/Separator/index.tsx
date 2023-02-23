import React from 'react';
import {Props} from './types';

import {Container} from './styles';

const Separator = ({height, width}: Props) => {
  return <Container testID="separator" height={height} width={width} />;
};
export {Separator};

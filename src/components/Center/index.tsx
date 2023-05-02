import React, {ReactNode} from 'react';
import {Container} from './styles';

type Props = {
  children: ReactNode;
};

const Center: React.FC<Props> = ({children}: Props) => {
  return <Container>{children}</Container>;
};

export {Center};

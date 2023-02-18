import React, {useMemo} from 'react';
import {Separator} from '../Separator';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
// import {View} from 'react-native';

import {Container} from './styles';

import {Props} from './types';

const HeaderOptions = ({
  left = <Separator />,
  center = <Separator />,
  right = <Separator />,
}: Props) => {
  const {spacing} = useTheme();

  const heightSeperatorStatusBar = useMemo(() => {
    return StatusBar.currentHeight
      ? StatusBar.currentHeight + spacing.md
      : spacing.md;
  }, [spacing]);

  return (
    <>
      <Separator height={heightSeperatorStatusBar} />
      <Container>
        {left}
        {center}
        {right}
      </Container>
    </>
  );
};

export {HeaderOptions};

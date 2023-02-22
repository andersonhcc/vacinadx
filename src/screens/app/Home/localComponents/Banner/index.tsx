import React, {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

import {Container} from './styles';
import {BannerProps} from './types';
import {useTheme} from 'styled-components';
import {Shadow} from '~/components/Shadow';

const Banner = ({source}: BannerProps) => {
  const {spacing} = useTheme();
  const {height, width} = useWindowDimensions();

  const HWBanner = useMemo(() => {
    const percentageFromScreenToBanner = 0.166;
    if (height > width) {
      return {
        h: height * percentageFromScreenToBanner,
        w: width - 2 * spacing.md,
      };
    } else {
      return {
        h: width * percentageFromScreenToBanner,
        w: height - 2 * spacing.md,
      };
    }
  }, [height, width, spacing]);

  return (
    <Shadow>
      <Container h={HWBanner.h} w={HWBanner.w} source={source} />
    </Shadow>
  );
};

export {Banner};

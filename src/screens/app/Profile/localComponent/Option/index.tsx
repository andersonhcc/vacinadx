import React from 'react';
import Icon from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';
import {useTheme} from 'styled-components';
import {Container, Circle, Row} from './styles';
import {OptionProps} from './types';

const Option = ({icon, title, ...rest}: OptionProps) => {
  const {colors, spacing} = useTheme();
  return (
    <Container {...rest}>
      <Circle>
        <Icon icon={icon} size={15} activeColor={colors.background.main} />
      </Circle>
      <Separator width={spacing.sm} />
      <Row>
        <Text>{title}</Text>
        <Icon
          icon="arrowRight"
          size={13}
          activeColor={colors.background.main}
        />
      </Row>
    </Container>
  );
};

export {Option};

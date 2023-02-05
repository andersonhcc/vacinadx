import React, {useContext, useMemo} from 'react';
import {ButtonProps} from './types';
import {ThemeContext} from 'styled-components';
import {Container, Title, Loading} from './styles';

const Button = ({
  children,
  color = 'primary',
  loading,
  mode = 'contained',
  onPress,
  ...rest
}: ButtonProps) => {
  const {colors} = useContext(ThemeContext);

  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? colors[color].main : colors[color].onMain;
  }, [mode, color, colors]);

  return (
    <Container
      mode={mode}
      onPress={onPress}
      borderColor={colors[color].main}
      color={colors[color].main}
      {...rest}>
      <Title color={colorByMode}>{children}</Title>
      {loading && <Loading size={15} color={colorByMode} />}
    </Container>
  );
};

export {Button};

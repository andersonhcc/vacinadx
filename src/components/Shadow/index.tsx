import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {ShadowProps} from './types';

const Shadow = ({children, ...rest}: ShadowProps) => {
  return (
    <Pressable style={styles.shadow} {...rest}>
      {children}
    </Pressable>
  );
};

export {Shadow};

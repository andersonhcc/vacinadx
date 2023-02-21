import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '~/components/Text';

export const Container = styled.View`
  width: 115px;
  height: 115px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.spacing.sm}px;
  background-color: ${({theme}) => theme.colors.background.main};
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primary.main};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  text-align: center;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default styles;

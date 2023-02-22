import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CardOption = styled.View`
  background-color: ${({theme}) => theme.colors.background.main};
  padding: ${({theme}) => theme.spacing.md}px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.primary.main};
  opacity: 0.5;
`;

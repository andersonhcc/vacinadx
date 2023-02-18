import styled from 'styled-components/native';
import {Text} from '~/components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin: 0 ${({theme}) => theme.spacing.md}px;
`;

export const PressableX = styled.Pressable`
  padding: ${({theme}) => theme.spacing.sm}px;
`;

export const AcessText = styled(Text)`
  align-self: center;
`;

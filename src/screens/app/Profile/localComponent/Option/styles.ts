import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing.sm}px;
`;

export const Circle = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.colors.primary.main};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  height: 181px;
  padding: ${({theme}) => theme.spacing.md}px;
  justify-content: flex-end;
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

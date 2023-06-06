import styled from 'styled-components/native';

export const Header = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 153px;
  background-color: rgba(7, 43, 89, 0.75);
  top: 0;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderContentRow = styled.View`
  flex-direction: row;
  padding: ${({theme}) => theme.spacing.md}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InputRow = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

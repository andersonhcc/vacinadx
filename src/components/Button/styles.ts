import styled from 'styled-components/native';
import {Mode} from './types';

interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  padding: 12px 0 12px 0;
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-width: 1px;

  background-color: ${({color, mode}) => {
    if (mode === 'outlined') {
      return 'transparent';
    }
    return color;
  }};
`;

interface TitleProps {
  readonly color: string;
}
export const Title = styled.Text<TitleProps>`
  align-self: center;
  font-family: ${({theme}) => theme.typography.body2.fontFamily};
  font-size: ${({theme}) => theme.typography.body2.fontSize};
  color: ${({color}) => color};
`;

export const Loading = styled.ActivityIndicator`
  margin-left: 10px;
`;

// export const Title = styled(Text).attrs({
//   color: 'primary',
//   typography: 'body2',
// })<TitleProps>`
//   align-self: center;
//   color: ${({color}) => color};
// `;

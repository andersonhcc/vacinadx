import styled, {css} from 'styled-components/native';
import {Mode} from './types';
import {TypographyType} from 'styled-components/native';

interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
  readonly paddingHorizontal?: number;
  readonly paddingVertical?: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 12px 0 12px 0;
  ${({paddingHorizontal}) => {
    if (paddingHorizontal) {
      return css`
        padding-left: ${paddingHorizontal}px;
        padding-right: ${paddingHorizontal}px;
      `;
    }
  }}

  ${({paddingVertical}) => {
    if (paddingVertical) {
      return css`
        padding-top: ${paddingVertical}px;
        padding-bottom: ${paddingVertical}px;
      `;
    }
  }}

  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  flex-direction: row;
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
  readonly typography: TypographyType;
}
export const Title = styled.Text<TitleProps>`
  align-self: center;
  font-family: ${({theme, typography}) =>
    theme.typography[typography].fontFamily};
  font-size: ${({theme, typography}) =>
    theme.typography[typography].fontSize}px;
  color: ${({color}) => color};
`;

export const Loading = styled.ActivityIndicator`
  margin-left: ${({theme}) => theme.spacing.sm}px;
`;

// export const Title = styled(Text).attrs({
//   color: 'primary',
//   typography: 'body2',
// })<TitleProps>`
//   align-self: center;
//   color: ${({color}) => color};
// `;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${({theme}) => theme.spacing.md}px;
`;

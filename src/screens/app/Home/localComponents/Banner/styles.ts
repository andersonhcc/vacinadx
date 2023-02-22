import styled from 'styled-components/native';
import {ContainerProp} from './types';

export const Container = styled.Image<ContainerProp>`
  width: ${({w}) => w}px;
  height: ${({h}) => h}px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

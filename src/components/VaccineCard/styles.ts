import styled from 'styled-components/native';
import {BadgeLeftProps, ChipProps} from './types';

const widthBadgeLeft = 13;
export const Container = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  padding-left: ${({theme}) => theme.spacing.md + widthBadgeLeft}px;
  padding-right: ${({theme}) => theme.spacing.md}px;
  padding-top: ${({theme}) => theme.spacing.sm}px;
  padding-bottom: ${({theme}) => theme.spacing.sm}px;
`;

export const BadgeLeft = styled.View<BadgeLeftProps>`
  position: absolute;
  width: ${widthBadgeLeft}px;
  min-width: ${widthBadgeLeft}px;
  max-width: ${widthBadgeLeft}px;
  height: 100px;
  border-top-left-radius: ${({theme}) => theme.borders.radius.sm}px;
  border-bottom-left-radius: ${({theme}) => theme.borders.radius.sm}px;
  background-color: ${({color}) => color};
`;

export const ChipWrap = styled.View`
  flex-direction: row;
`;

export const Chip = styled.View<ChipProps>`
  flex-direction: row;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  background-color: ${({color}) => color};
`;

export const VaccineDate = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.View`
  max-width: 70%;
`;

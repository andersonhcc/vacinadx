export enum HasSecondSHotEnum {
  YES = 'yes',
  NO = 'no',
  SINGLE = 'single',
}

export type HasSecondShot =
  | HasSecondSHotEnum.YES
  | HasSecondSHotEnum.NO
  | HasSecondSHotEnum.SINGLE;

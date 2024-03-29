import {shot} from './shot';

export interface VaccineDTO {
  id: string;
  userId: string;
  name: string;
  brand: string;
  applicationDate: string;
  nextApplicationDate: string;
  dose: shot;
  barCode: string;
  createdAt: string;
}

import {UserDTO} from '~/@types/dtos/user';

export type RequestSignInData = Partial<UserDTO>;

export type ResponseSignInData = Array<UserDTO>;

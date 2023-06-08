import {UserDTO} from '~/@types/dtos/user';
import {RequestCreateUserData} from '~/services/resource/User/types';

export interface AuthContextProp {
  isSignedIn: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: Partial<UserDTO>) => Promise<void>;
  signOut: () => void;
  signUp: (data: RequestCreateUserData) => Promise<void>;
  checkExistUser: (params: Partial<UserDTO>) => Promise<boolean>;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};

import {UserDTO} from '~/@types/dtos/user';
import {RequestCreateUserData} from '~/services/resource/User/types';

interface RequestSignData {
  email: string;
  password: string;
}

export interface AuthContextProp {
  isSignedIn: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: RequestSignData) => Promise<void>;
  signOut: () => void;
  signUp: (data: RequestCreateUserData) => Promise<void>;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};

import api from '~/services/api';
import {ResponseCreateUserData, RequestCreateUserData} from './types';

export const createUserResource = async (
  CreateUser: RequestCreateUserData,
): Promise<ResponseCreateUserData> => {
  const {data} = await api.post<ResponseCreateUserData>('/users', {
    CreateUser,
  });
  return data;
};

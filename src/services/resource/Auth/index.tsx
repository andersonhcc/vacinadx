import api from '~/services/api';
import {RequestSignInData, ResponseSignInData} from './types';
import {UserDTO} from '~/@types/dtos/user';

export const signInResource = async (
  params: RequestSignInData,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>('/users', {params});

  if (data.length === 0) {
    throw 'Usuário não encontrado';
  }

  return data;
};

export const checkIfExistsUserResource = async (
  params: Partial<UserDTO>,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>('/users', {
    params,
  });

  return data;
};

import React, {ReactNode, useEffect, useState} from 'react';
import {createContext} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProp} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncUserKeys} from './types';
import {signInResource} from '~/services/resource/Auth';
import {RequestSignInData} from '~/services/resource/Auth/types';
import {Alert} from 'react-native';
import api from '~/services/api';
import {RequestCreateUserData} from '~/services/resource/User/types';
import {createUserResource} from '~/services/resource/User';

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({children}: Props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [rehydrateLoading, setRehydrateLoading] = useState(true);

  /**
   * Callbacks
   */

  const saveUserToStorageAndConfigToken = async (userData: UserDTO) => {
    api.defaults.headers.Authorization = `Bearer ${userData.token}`;
    await AsyncStorage.setItem(
      asyncUserKeys.user,
      JSON.parse(user as unknown as string),
    );
  };

  const signIn = async (data: RequestSignInData) => {
    try {
      setLoading(true);
      const response = await signInResource(data);
      setUser(response.user);
      setIsSignedIn(true);
      await saveUserToStorageAndConfigToken(response.user);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível realizar login, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: RequestCreateUserData) => {
    try {
      setLoading(true);
      const response = await createUserResource(data);
      setUser(response.user);
      setIsSignedIn(true);
      await saveUserToStorageAndConfigToken(response.user);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível realizar login, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setIsSignedIn(false);
    api.defaults.headers.Authorization = 'Bearer ';
    await AsyncStorage.clear();
  };

  const rehydrate = async () => {
    const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);
    if (rehydrateUser) {
      setUser(JSON.parse(rehydrateUser));
      setIsSignedIn(true);
    }
    setRehydrateLoading(false);
  };

  /**
   * Effects
   */

  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider
      value={{user, isSignedIn, loading, signIn, signOut, signUp}}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Acess} from '~/screens/auth/Acess/indes';
import {Login} from '~/screens/auth/Login';
import {SignUp} from '~/screens/auth/SignUp';
import {OnBoarding} from '~/screens/auth/OnBoarding';
import {SignUpStep2} from '~/screens/auth/SignUpStep2';

const Stack = createNativeStackNavigator<SignIntackParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="onBoarding" component={OnBoarding} />
      <Stack.Screen name="access" component={Acess} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="signUpStep2" component={SignUpStep2} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;

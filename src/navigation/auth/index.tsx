import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Acess} from '~/screens/auth/Acess/indes';
import {Login} from '~/screens/auth/Login';
import {SignUp} from '~/screens/auth/SignUp';
import {OnBoarding} from '~/screens/auth/OnBoarding';

const AuthStack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="acess" component={Acess} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={SignUp} />
      <AuthStack.Screen name="onboarding" component={OnBoarding} />
    </AuthStack.Navigator>
  );
};

export default SignInNavigator;

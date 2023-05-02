import React, {useEffect} from 'react';
import {DevSettings} from 'react-native';
import SignInNavigator from './auth';
import useAuth from '~/hooks/useAuth';
import SignedInNavigator from './app';

const Routes: React.FC = () => {
  const {isSignedIn} = useAuth();
  useEffect(() => {
    DevSettings.addMenuItem('Change Routes', () => setIsLoggedIn(old => !old));
  }, []);
  return isSignedIn ? <SignedInNavigator /> : <SignInNavigator />;
};

export default Routes;

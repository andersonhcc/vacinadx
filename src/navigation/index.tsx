import React, {useEffect} from 'react';
import {DevSettings} from 'react-native';
import BottomTabsNavigator from './app/BottomTabNavigator';
import SignInNavigator from './auth';
import useAuth from '~/hooks/useAuth';

const Routes: React.FC = () => {
  const {isSignedIn} = useAuth();
  useEffect(() => {
    DevSettings.addMenuItem('Change Routes', () => setIsLoggedIn(old => !old));
  }, []);
  return isSignedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;

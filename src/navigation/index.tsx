import React, {useEffect, useState} from 'react';
import {DevSettings} from 'react-native';
import BottomTabsNavigator from './app/BottomTabNavigator';
import SignInNavigator from './auth';

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    DevSettings.addMenuItem('Change Routes', () => setIsLoggedIn(old => !old));
  }, []);
  return isLoggedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;

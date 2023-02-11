import React from 'react';
import BottomTabsNavigator from './app/BottomTabNavigator';
import SignInNavigator from './auth';

const Routes: React.FC = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <BottomTabsNavigator /> : <SignInNavigator />;
};

export default Routes;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
const BottomTab = createBottomTabNavigator();
import {Home} from '~/screens/app/Home';
import {Profile} from '~/screens/app/Profile';

const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;

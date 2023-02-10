import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
const BottomTab = createBottomTabNavigator();
import {Home} from '~/screens/Home';
import {Profile} from '~/screens/Profile';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

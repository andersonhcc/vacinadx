import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '~/screens/app/Home';
import {Profile} from '~/screens/app/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();
const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;

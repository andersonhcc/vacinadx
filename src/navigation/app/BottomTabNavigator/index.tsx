import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Profile} from '~/screens/app/Profile';
import Icon from '~/components/Icon';
import {useTheme} from 'styled-components';
import {HomeStack} from '../HomeStack';

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();
const BottomTabsNavigator = () => {
  const {colors} = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.surface100.main,
      }}>
      <BottomTab.Screen
        name="home"
        component={HomeStack}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="home" activeColor={color} />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="profile" activeColor={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '~/screens/Home';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="feed" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

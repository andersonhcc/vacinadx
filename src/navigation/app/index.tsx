import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabsNavigator from './BottomTabNavigator';
import {VaccineDetail} from '~/screens/app/VaccineDetail';

const Stack = createNativeStackNavigator<SignedInStackParamsList>();

const SignedInNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTabHome" component={BottomTabsNavigator} />
      <Stack.Screen name="VaccineDetail" component={VaccineDetail} />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;

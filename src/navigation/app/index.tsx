import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabsNavigator from './BottomTabNavigator';
import {VaccineDetail} from '~/screens/app/VaccineDetail';
import {VaccineOnMap} from '~/screens/app/VaccineOnMap';

const Stack = createNativeStackNavigator<SignedInStackParamsList>();

const SignedInNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTabHome" component={BottomTabsNavigator} />
      <Stack.Screen name="VaccineDetail" component={VaccineDetail} />
      <Stack.Screen name="VaccineOnMap" component={VaccineOnMap} />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;

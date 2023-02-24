import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '~/screens/app/Home';
import {AddVaccine} from '~/screens/app/AddVaccine';
import {QrCode} from '~/screens/app/QrCode';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="AddVaccine"
        component={AddVaccine}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="QrCode"
        component={QrCode}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

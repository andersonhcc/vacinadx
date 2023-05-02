import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '~/screens/app/Home';
import {AddVaccine} from '~/screens/app/AddVaccine';
import {QrCode} from '~/screens/app/QrCode';
import {MyVaccine} from '~/screens/app/MyVaccine';
import {AddVaccineManually} from '~/screens/app/AddVaccineManually';

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

      <Stack.Screen
        name="AddVaccineManually"
        component={AddVaccineManually}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="MyVaccine"
        component={MyVaccine}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

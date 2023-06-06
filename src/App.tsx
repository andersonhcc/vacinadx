import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './context/Auth';
import Routes from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import useAppearance from './hooks/useAppearance';
import {enableLatestRenderer} from 'react-native-maps';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

enableLatestRenderer();

const App: React.FC = () => {
  const {theme} = useAppearance();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:
        '1034098257493-fghph0g9oal2jsm5tc6o91ouj65rv03q.apps.googleusercontent.coms',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

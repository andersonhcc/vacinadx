import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './context/Auth';
import Routes from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import useAppearance from './hooks/useAppearance';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App: React.FC = () => {
  const {theme} = useAppearance();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:
        '1034098257493-02vsslpivpr50i2pojimpf3inq5uobel.apps.googleusercontent.com',
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

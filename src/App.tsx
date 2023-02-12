import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './context/Auth';
import Routes from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import useAppearance from './hooks/useAppearance';

const App: React.FC = () => {
  const {theme} = useAppearance();

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

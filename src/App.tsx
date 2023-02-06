import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Home} from '~/screens/Home';
import useAppearance from './hooks/useAppearance';

const App: React.FC = () => {
  const {theme} = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;

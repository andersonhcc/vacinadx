import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import useAppearance from './hooks/useAppearance';

const App: React.FC = () => {
  const {theme} = useAppearance();

  return <ThemeProvider theme={theme} />;
};

export default App;

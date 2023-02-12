import {useContext} from 'react';
import {AuthContext} from '~/context/Auth';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within an AuthProvider.');
  }

  return context;
};

export default useAuth;

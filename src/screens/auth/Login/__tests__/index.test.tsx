import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {themeLight} from '~/constants/styles/themes/light';
import {Login} from '..';

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {},
}));

jest.mock('../../../../hooks/useSignInNavigator', () => () => ({}));

it('render render correctly even without text on textInputs and trying to login', async () => {
  const {debug, findAllByTestId, getByText, getByTestId} = render(<Login />, {
    wrapper: ({children}) => (
      <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
    ),
  });

  const button = getByTestId('button-login-email');

  fireEvent(button, 'onPress');

  await waitFor(() => findAllByTestId('error-input'));

  expect(getByText('Campo obrigatório')).toBeTruthy();
  expect(getByText('A senha deve ter mais que 6 caracteres')).toBeTruthy();
  debug();
});

/* eslint-disable react/react-in-jsx-scope */
import {BackButton} from '..';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';

import {themeLight as theme} from '../../../constants/styles/themes/light';

describe('BackButton', () => {
  it('should render with icon', () => {
    const {toJSON} = renderer.create(
      <ThemeProvider theme={theme}>
        <BackButton icon="apple" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

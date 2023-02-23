/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Separator} from '~/components/Separator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const {toJSON} = renderer.create(<Separator height={20} />);

  expect(toJSON()).toMatchSnapshot();
});

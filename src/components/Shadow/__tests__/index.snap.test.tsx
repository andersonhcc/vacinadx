/* eslint-disable react/react-in-jsx-scope */
import {Shadow} from '..';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

describe('Shadow', () => {
  it('should render with children', () => {
    const {toJSON} = renderer.create(
      <Shadow>
        <View />
      </Shadow>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

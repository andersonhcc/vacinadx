import React from 'react';
import {render} from '@testing-library/react-native';
import {Separator} from '..';
describe('Separator renderer', () => {
  it('should find by separator by testID', () => {
    const {getByTestId} = render(<Separator />);

    const separator = getByTestId('separator');

    expect(separator).toBeTruthy();
  });
  it('should render without props', () => {
    const {root} = render(<Separator />);

    expect(root.props).toMatchObject({});
  });

  it('should render with height prop', () => {
    const {root} = render(<Separator height={15} />);

    expect(root.props).toMatchObject({height: 15});
  });

  it('should render with width prop', () => {
    const {root} = render(<Separator width={15} />);

    expect(root.props.width).toBe(15);
  });

  it('should render with width and height props', () => {
    const {root} = render(<Separator width={15} height={15} />);

    expect(root.props.width).toBe(15);
    expect(root.props.height).toBe(15);
  });
});

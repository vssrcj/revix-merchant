/**
 *
 * Tests for Icon
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Icon from '../index';

describe('<Icon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Icon />);
    expect(spy).toHaveBeenCalled();
  });
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Icon />);
    expect(firstChild).toMatchSnapshot();
  });
});

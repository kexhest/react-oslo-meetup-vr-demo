/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Demo from '../Demo';

describe('<Demo />', () => {
  const component = shallow(<Demo />);

  it('renders correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});

/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Links from '../Links';

describe('<Links />', () => {
  const component = shallow(<Links />);

  it('renders correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});

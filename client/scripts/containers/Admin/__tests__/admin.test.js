import test from 'ava';

import React from 'react';
import { shallow } from 'enzyme';

import { Admin } from '../Admin';

test('Admin renders a div', (t) => {
  const wrapper = shallow(<Admin />);

  t.is(wrapper.type(), 'div');
});

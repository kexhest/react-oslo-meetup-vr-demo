/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes } from 'react';

import Oslo from 'components/Oslo/Oslo';
import Links from 'components/Links/Links';

import './demo.scss';

/**
 * This is the Demo component class.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Demo = ({ playing, name, items }) => {
  if (!playing) {
    return <div>WECOME TO THE DEMO!</div>;
  }

  console.log(items);

  let demo = null;

  switch (name) {
    case 'oslo':
      demo = <Oslo />;
      break;

    case 'links':
      demo = <Links items={items} />;
      break;

    default:
      // no-op
  }

  return (
    <div className="demo">
      {demo}
    </div>
  );
};

/**
 * Declare expected property types.
 */
Demo.propTypes = {
  playing: PropTypes.bool,
  name: PropTypes.string,
  items: PropTypes.array,
};

/**
 * Set default properties.
 */
Demo.defaultProps = {
  playing: false,
  name: '',
  items: [],
};

export default Demo;

/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Links from 'components/Links/Links';

import Hello from './Hello/Hello';
import Oslo from './Oslo/Oslo';
import City from './City/City';

import './demo.scss';

/**
 * This is the Demo component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Demo = ({ playing, name }) => {
  let demo = 'Grab some popcorn, the demo will begin shortly!';

  if (playing) {
    switch (name) {
      case 'hello':
        demo = <Hello />;
        break;

      case 'oslo':
        demo = <Oslo />;
        break;

      case 'city':
        demo = <City />;
        break;

      case 'links':
        demo = <Links />;
        break;

      default:
        // no-op
    }
  }

  return (
    <div className={classNames({ demo: playing })}>
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
};

/**
 * Set default properties.
 */
Demo.defaultProps = {
  playing: false,
  name: '',
};

export default Demo;

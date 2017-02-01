/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import 'aframe';

import { Entity, Scene } from 'aframe-react';

import oslo from 'gfx/images/oslo.jpg';

/**
 * This is the Oslo component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Oslo = () =>
  <Scene>
    <Entity
      geometry={{ primitive: 'sphere', radius: 100 }}
      material={{ shader: 'flat', src: oslo }}
      scale={[1, 1, -1]}
    />
    <Entity
      material={{ color: '#000' }}
      text={{ value: 'Welcome to APT', color: '#000', align: 'center', width: 40 }}
      position={[0, 4, -10]}
    />
  </Scene>;

/**
 * Declare expected property types.
 */
Oslo.propTypes = {};

/**
 * Set default properties.
 */
Oslo.defaultProps = {};

export default Oslo;

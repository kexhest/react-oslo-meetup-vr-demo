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

import './oslo.scss';

/**
 * This is the Oslo component class.
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
    {/* <Entity
      geometry={{ primitive: 'box' }}
      material="color: red"
      position={[0, 0, -5]}
    /> */}
    <Entity
      // text={{ value: 'HELLO WORLD' }}
      text={{ text: 'HELLO WORLD' }}
      // bmfont-text={{ text: 'HELLO WORLD' }}
      // material={{ color: 'blue' }}
      material={{ color: '#FFFFFF' }}
      // position={[-1.75, 1, -3]}
      position={[0, 1, -5]}
    />
    {/* <Entity
      light={{ type: 'ambient', color: '#888' }}
    />
    <Entity
      light={{ type: 'directional', intensity: 0.5 }}
      position={[-1, 1, 0]}
    />
    <Entity
      light={{ type: 'directional', intensity: 1 }}
      position={[1, 1, 0]}
    /> */}
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

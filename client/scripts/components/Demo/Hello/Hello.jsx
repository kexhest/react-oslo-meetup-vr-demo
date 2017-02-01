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

/**
 * This is the Hello component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Hello = () =>
  <Scene>
    <Entity
      geometry={{ primitive: 'sphere', radius: 1.25 }}
      material={{ shader: 'flat', color: '#EF2D5E' }}
      position={[0, 1.25, -5]}
    />
    <Entity
      geometry={{ primitive: 'box', width: 1, height: 1, depth: 1 }}
      material={{ shader: 'flat', color: '#4CC3D9' }}
      position={[-1, 0.5, -3]}
      rotation={[0, 45, 0]}
    />
    <Entity
      geometry={{ primitive: 'cylinder', radius: 0.5, height: 1.5 }}
      material={{ shader: 'flat', color: '#FFC65D' }}
      position={[1, 0.75, -3]}
    />
    <Entity
      geometry={{ primitive: 'plane', width: 4, height: 4 }}
      material={{ shader: 'flat', color: '#7BC8A4' }}
      position={[0, 0, -4]}
      rotation={[-90, 0, 0]}
    />
    <Entity
      geometry={{ primitive: 'sphere', radius: 100 }}
      material={{ shader: 'flat', color: '#ECECEC' }}
      scale={[-1, 1, 1]}
    />
  </Scene>;

/**
 * Declare expected property types.
 */
Hello.propTypes = {};

/**
 * Set default properties.
 */
Hello.defaultProps = {};

export default Hello;

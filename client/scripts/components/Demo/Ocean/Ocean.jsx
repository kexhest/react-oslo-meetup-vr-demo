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
import extras from 'aframe-extras';

import { Entity, Scene } from 'aframe-react';

extras.primitives.registerAll();

/**
 * This is the Ocean component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Ocean = () =>
  <Scene fog={{ type: 'exponential', color: '#fff', density: 0.06 }}>
    <Entity
      ocean={{ width: 50, depth: 50, density: 40 }}
      rotation={[-90, 0, 0]}
    />

    <Entity
      geometry={{ primitive: 'cylinder', radius: 1, height: 50 }}
      material={{ shader: 'flat', color: '#39BB82' }}
      position={[0, -24.5, 0]}
    />

    <Entity
      geometry={{ primitive: 'cylinder', radius: 1, height: 50 }}
      material={{ shader: 'flat', color: '#39BB82' }}
      position={[5, -24.5, 0]}
    />

    <Entity
      geometry={{ primitive: 'cylinder', radius: 1, height: 50 }}
      material={{ shader: 'flat', color: '#39BB82' }}
      position={[-5, -24.5, 0]}
    />

    <Entity
      light={{ type: 'hemisphere', color: '#aaa', groundColor: '#000' }}
      intensity={0.9}
    />

    <Entity
      light={{ type: 'ambient', color: '#DC8874' }}
      intensity={0.5}
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
Ocean.propTypes = {};

/**
 * Set default properties.
 */
Ocean.defaultProps = {};

export default Ocean;

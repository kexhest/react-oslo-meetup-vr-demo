/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';

import { Entity, Scene } from 'aframe-react';

import cityObj from 'models/city.obj';
import cityMtl from 'models/city.mtl';
import 'models/city.png';

/**
 * This is the City component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
export default class City extends Component {

  /**
   * Create City.
   *
   * @param {Object} props
   *
   * @return {void}
   */
  constructor(props) {
    super(props);

    this.state = {
      intensity: 1,
    };
  }

  /**
   * Eventhandler for when the light is clicked.
   *
   * @return {void}
   */
  onClickHandler = () => {
    const { intensity } = this.state;

    const newIntensity = intensity ? 0 : 1;

    this.setState({
      intensity: newIntensity,
    });
  }

  /**
   * Render City.
   *
   * @return {Object}
   */
  render() {
    const { intensity } = this.state;

    return (
      <Scene>
        <a-assets>
          <a-asset-item id="city-obj" src={cityObj} />
          <a-asset-item id="city-mtl" src={cityMtl} />
        </a-assets>
        <Entity camera look-controls wasd-controls position={[0, 1, 0]}>
          <a-cursor animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150" />
        </Entity>
        <Entity
          obj-model={{ obj: '#city-obj', mtl: '#city-mtl' }}
          position={[0, -1, -5]}
        />
        <Entity
          light={{ type: 'ambient', color: '#222' }}
          intensity={intensity}
        />
        <Entity
          light={{ type: 'point', color: intensity ? '#fff' : '#000' }}
          intensity={intensity}
          position={[-3, 6, -10]}
        >
          <Entity
            geometry={{ primitive: 'box', widht: 0.4, height: 0.6, depth: 0.5 }}
            material={{ transparent: true, opacity: 0 }}
            position={[0, 0, 0]}
            onClick={this.onClickHandler}
          />
          {intensity &&
            <Entity animation={{ property: 'light.intensity', from: 1, to: 0.2, loop: true, dir: 'alternate', dur: 1000 }} />
          }
        </Entity>
      </Scene>
    );
  }
}

/**
 * Declare expected property types.
 */
City.propTypes = {};

/**
 * Set default properties.
 */
City.defaultProps = {};

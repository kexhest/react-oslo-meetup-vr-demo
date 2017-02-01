/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import demos from 'data/demos';

import './dashboard.scss';

/**
 * This is the Dashboard component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export default class Dashboard extends Component {

  nextDemo = (e) => {
    e.preventDefault();
    const { nextDemo } = this.props;

    const { name } = e.currentTarget.dataset;

    nextDemo(demos.find(demo => demo.name === name));
  }

  toggleDemo = (e) => {
    e.preventDefault();
    const { demo, playDemo, pauseDemo } = this.props;

    const { play } = e.currentTarget.dataset;

    if (play === 'true') {
      playDemo(demo);
    } else {
      pauseDemo(demo);
    }
  }

  render() {
    const { username, demo, logoutUser } = this.props;

    return (
      <div className="dashboard">
        <div className="top-bar">
          <p>{username}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>

        <ul>
          {demos.map(d =>
            <li>
              <button
                key={d.name}
                onClick={this.nextDemo}
                data-name={d.name}
                className={classNames('demo-button', { active: demo.name === d.name })}
              >
                {d.name}
              </button>
            </li>
          )}
          <li>
            <button
              onClick={this.toggleDemo}
              data-play={!demo.playing}
              className={classNames('demo-button', { active: demo.playing })}
            >
              {demo.playing ? 'PAUSE' : 'PLAY'}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

/**
 * Declare expected property types.
 */
Dashboard.propTypes = {
  username: PropTypes.string,
  demo: PropTypes.object,
  logoutUser: PropTypes.func,
  nextDemo: PropTypes.func,
  playDemo: PropTypes.func,
  pauseDemo: PropTypes.func,
};

/**
 * Set default properties.
 */
Dashboard.defaultProps = {
  username: '',
  demo: {},
  logoutUser: () => {},
  nextDemo: () => {},
  playDemo: () => {},
  pauseDemo: () => {},
};

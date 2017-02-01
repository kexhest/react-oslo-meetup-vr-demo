/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';

import { refreshDemo as refreshDemoAction } from 'actions/actions';

import io from 'utils/socket';

import './app.scss';

/**
 * This is the App component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export class App extends Component {

  componentDidMount() {
    const { refreshDemo } = this.props;

    io.on('update', (data) => {
      refreshDemo(data);
    });
  }

  render() {
    const { children, demo } = this.props;

    return (
      <div className="app">
        {children && cloneElement(children, {
          ...demo,
        })}
      </div>
    );
  }
}

/**
 * Declare expected property types.
 */
App.propTypes = {
  children: PropTypes.element.isRequired,
  demo: PropTypes.object,
  refreshDemo: PropTypes.func,
};

/**
 * Declare expected context types.
 */
App.contextTypes = {
  router: PropTypes.object,
};

/**
 * Set default properties.
 */
App.defaultProps = {
  demo: {},
  refreshDemo: () => {},
};

/**
 * Map state to props.
 *
 * @param {Object} state
 *
 * @return {Object}
 */
const mapStateToProps = state => ({
  demo: state.demo,
});

/**
 * Export redux container component by subscribing the component to the store
 * and binding necessary action dispatchers.
 */
export default connect(
  mapStateToProps,
  {
    refreshDemo: refreshDemoAction,
  }
)(App);

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

import {
  getUser as getUserAction,
  nextDemo as nextDemoAction,
  playDemo as playDemoAction,
  pauseDemo as pauseDemoAction,
  loginUser as loginAction,
  logoutUser as logoutAction,
} from 'actions/actions';

import './admin.scss';

/**
 * This is the Admin component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
export class Admin extends Component {

  /**
   * Lifecycle method, triggered when the component is mounted to the DOM.
   *
   * @return {void}
   */
  componentDidMount() {
    const { auth, getUser } = this.props;
    const { router } = this.context;

    // Token exists from before, try to fetch user details to see if session is
    // still valid. If not, redirect to login.
    if (auth.isAuthenticated) {
      getUser(auth.token)
        .then((response) => {
          if (response.type === 'GET_USER_FAILURE') router.replace('/login');
        });
    }
  }

  /**
   * Lifecycle method, triggered when the component receives new props.
   *
   * @return {void}
   */
  componentWillReceiveProps(nextProps) {
    const { location, auth } = this.props;
    const { router } = this.context;

    // User has successfully logged in, redirect to '/' -> dashboard.
    if (!auth.isAuthenticated && nextProps.auth.isAuthenticated) {
      router.replace((location.state && location.state.next) || '/');
    }

    if (auth.isAuthenticated && !nextProps.auth.isAuthenticated) {
      router.replace('/admin/login');
    }
  }

  /**
   * Render react component.
   *
   * @return {Object}
   */
  render() {
    const {
      children,
      user,
      demo,
      login,
      nextDemo,
      playDemo,
      pauseDemo,
      loginUser,
      logoutUser,
    } = this.props;

    return (
      <div className="app">
        {children && cloneElement(children, {
          ...user,
          ...login,
          demo,
          nextDemo,
          pauseDemo,
          playDemo,
          loginUser,
          logoutUser,
        })}
      </div>
    );
  }

}

/**
 * Declare expected property types.
 */
Admin.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  auth: PropTypes.object,
  user: PropTypes.object,
  demo: PropTypes.object,
  login: PropTypes.object,
  getUser: PropTypes.func,
  nextDemo: PropTypes.func,
  pauseDemo: PropTypes.func,
  playDemo: PropTypes.func,
  loginUser: PropTypes.func,
  logoutUser: PropTypes.func,
};

/**
 * Declare expected context types.
 */
Admin.contextTypes = {
  router: PropTypes.object,
};

/**
 * Set default properties.
 */
Admin.defaultProps = {
  getUser: () => {},
  nextDemo: () => {},
  pauseDemo: () => {},
  playDemo: () => {},
  loginUser: () => {},
  logoutUser: () => {},
};

/**
 * Map state to props.
 *
 * @param {Object} state
 *
 * @return {Object}
 */
const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  demo: state.demo,
  login: state.login,
});

/**
 * Export redux container component by subscribing the component to the store
 * and binding necessary action dispatchers.
 */
export default connect(
  mapStateToProps,
  {
    getUser: getUserAction,
    nextDemo: nextDemoAction,
    playDemo: playDemoAction,
    pauseDemo: pauseDemoAction,
    loginUser: loginAction,
    logoutUser: logoutAction,
  }
)(Admin);

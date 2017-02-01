/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { API } from 'middleware/api';
import { SOCKET } from 'middleware/socket';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

/**
 * Login user action.
 *
 * @param {Object} creds
 *
 * @return {Object}
 */
export const loginUser = creds => ({
  [API]: {
    endpoint: '/auth',
    method: 'POST',
    body: {
      grant_type: 'password',
      ...creds,
    },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

/**
 * Get user action.
 *
 * @param {String} token
 *
 * @return {Object}
 */
export const getUser = token => ({
  [API]: {
    endpoint: '/users/me',
    method: 'GET',
    token,
    types: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE],
  },
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

/**
 * Logout user action.
 *
 * @return {Object}
 */
export const logoutUser = token => ({
  [API]: {
    endpoint: '/auth',
    method: 'DELETE',
    token,
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
  },
});

export const NEXT_DEMO_REQUEST = 'NEXT_DEMO_REQUEST';
export const NEXT_DEMO_SUCCESS = 'NEXT_DEMO_SUCCESS';
export const NEXT_DEMO_FAILURE = 'NEXT_DEMO_FAILURE';

/**
 * Next demo action.
 *
 * @return {Object}
 */
export const nextDemo = data => ({
  [SOCKET]: {
    event: 'next',
    data,
    types: [NEXT_DEMO_REQUEST, NEXT_DEMO_SUCCESS, NEXT_DEMO_FAILURE],
  },
});

export const PLAY_DEMO_REQUEST = 'PLAY_DEMO_REQUEST';
export const PLAY_DEMO_SUCCESS = 'PLAY_DEMO_SUCCESS';
export const PLAY_DEMO_FAILURE = 'PLAY_DEMO_FAILURE';

/**
* Play demo action.
*
* @return {Object}
*/
export const playDemo = data => ({
  [SOCKET]: {
    event: 'play',
    data,
    types: [PLAY_DEMO_REQUEST, PLAY_DEMO_SUCCESS, PLAY_DEMO_FAILURE],
  },
});

export const PAUSE_DEMO_REQUEST = 'PAUSE_DEMO_REQUEST';
export const PAUSE_DEMO_SUCCESS = 'PAUSE_DEMO_SUCCESS';
export const PAUSE_DEMO_FAILURE = 'PAUSE_DEMO_FAILURE';

/**
 * Pause demo action.
 *
 * @return {Object}
 */
export const pauseDemo = data => ({
  [SOCKET]: {
    event: 'pause',
    data,
    types: [PAUSE_DEMO_REQUEST, PAUSE_DEMO_SUCCESS, PAUSE_DEMO_FAILURE],
  },
});

export const REFRESH = 'REFRESH';

/**
 * Refresh demo action.
 *
 * @return {Object}
 */
export const refreshDemo = data => ({
  type: REFRESH,
  payload: data,
});

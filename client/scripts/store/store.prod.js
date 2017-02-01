/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import api from 'middleware/api';
import socket from 'middleware/socket';

import rootReducer from 'reducers/reducers';

/**
 * This is the redux store. It applies reducers and middlewares.
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, api, socket)
);

export default store;

/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import demo from './demo';
import auth from './auth';
import user from './user';
import login from './login';

/**
 * This is the root reducer. It combines all reducers into a unified one.
 */
const rootReducer = combineReducers({
  demo,
  auth,
  user,
  login,
  routing,
});

export default rootReducer;

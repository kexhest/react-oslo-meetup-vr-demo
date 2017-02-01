/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import store from 'store/store';

import App from 'containers/App/App';
import Admin from 'containers/Admin/Admin';

import Demo from 'components/Demo/Demo';
import Login from 'components/Login/Login';
import Dashboard from 'components/Dashboard/Dashboard';
import NotFound from 'components/NotFound/NotFound';

/**
 * These are the application routes.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */

/**
 * Block access to routes depending on auth status.
 *
 * @param {object} nextState
 * @param {function} replace
 *
 * @return {void}
 */
function requireAuth(nextState, replace) {
  const { auth } = store.getState();

  if (!auth.isAuthenticated) {
    replace({
      pathname: '/admin/login',
      state: {
        next: nextState.location.pathname,
      },
    });
  }
}

/**
 * Redirect to startpage if user is authed.
 *
 * @param {object} nextState
 * @param {function} replace
 *
 * @return {void}
 */
function redirectToDashboard(nextState, replace) {
  const { auth } = store.getState();

  if (auth.isAuthenticated) {
    replace('/admin');
  }
}

/**
 * Export application routes.
 *
 * @type {object}
 */
export default [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Demo,
    },
  },
  {
    path: '/admin',
    component: Admin,
    indexRoute: {
      onEnter: requireAuth,
      component: Dashboard,
    },
    childRoutes: [
      {
        path: 'login',
        onEnter: redirectToDashboard,
        component: Login,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

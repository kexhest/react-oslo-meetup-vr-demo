/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Symbol from 'es6-symbol';

import io from 'utils/socket';

/**
 * Emits an even through socket.io.
 *
 * @param {string} event
 * @param {object} data
 *
 * @return {Promise}
 */
function emit(event, data) {
  return new Promise((resolve, reject) => {
    io.emit(event, data, (response) => {
      if (!response) {
        reject(response);
      } else {
        resolve(response);
      }
    });
  });
}

/**
 * SOCKET symbol.
 *
 * @type {Symbol}
 */
export const SOCKET = Symbol('SOCKET');

/**
 * Socket middleware, wraps action with fetch request. Subsequently triggers actions
 * corresponding to the types passed with the initial action.
 *
 * @return {Promise}
 */
export default () => next => (action) => {
  const actionData = action[SOCKET];

  // Prevent middleware from going past this point if not SOCKET is specified.
  if (typeof actionData === 'undefined') {
    return next(action);
  }

  const { event, data } = actionData;
  const [requestType, successType, failureType] = actionData.types;

  next({ type: requestType });

  return emit(event, data).then(
    response =>
      next({
        type: successType,
        payload: response,
      }),
    errors =>
      next({
        type: failureType,
        payload: errors || 'There was an error.',
      })
  );
};

/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import socket from 'socket.io-client';

import store from '../store/store';
import { refreshDemo } from '../actions/actions';

const io = socket();

io.on('connect', () => {
  io.emit('init', (data) => {
    store.dispatch(refreshDemo(data));
  });
});

export default io;

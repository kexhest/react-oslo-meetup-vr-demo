/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  NEXT_DEMO_REQUEST,
  NEXT_DEMO_SUCCESS,
  NEXT_DEMO_FAILURE,
  PLAY_DEMO_SUCCESS,
  PAUSE_DEMO_SUCCESS,
  REFRESH,
} from 'actions/actions';

const initialState = {
  playing: false,
  name: '',
  url: '',
};

/**
 * This is the demo reducer. It listens for actions and updates the demo object.
 */
export default function (state = initialState, { type, payload }) {
  switch (type) {

    case NEXT_DEMO_REQUEST:
      return {
        ...state,
        name: '',
        playing: false,
      };

    case NEXT_DEMO_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case NEXT_DEMO_FAILURE:
      return {
        ...state,
      };

    case PLAY_DEMO_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case PAUSE_DEMO_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case REFRESH:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;

  }
}

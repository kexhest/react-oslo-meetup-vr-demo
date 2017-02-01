/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './submit-button.scss';

/**
 * This is the SubmitButton component class.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const SubmitButton = ({ sending, invalid, onClick, text }) =>
  <button
    className={classNames('submit-button', {
      disabled: invalid,
      sending,
    })}
    // disabled={invalid}
    type="submit"
    onClick={onClick}
    onTouchStart={onClick}
  >
    <span>{text}</span>
  </button>;

/**
 * Declare expected property types.
 */
SubmitButton.propTypes = {
  sending: PropTypes.bool,
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

/**
 * Set default properties.
 */
SubmitButton.defaultProps = {};

export default SubmitButton;

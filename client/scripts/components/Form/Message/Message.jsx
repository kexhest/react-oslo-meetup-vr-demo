/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes } from 'react';

import './message.scss';

/**
 * This is the Message component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Message = ({ className, message, onClick }) =>
  <p onClick={onClick} className={className}>{message}</p>;

/**
 * Declare expected property types.
 */
Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Set default properties.
 */
Message.defaultProps = {
  onClick: () => {},
};

export default Message;

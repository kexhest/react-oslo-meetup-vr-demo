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

import './checkbox.scss';

/**
 * This is the Checkbox component.
 *
 * @author Magnus Bergman <hello@magnus.sexy>
 */
const Checkbox = ({ name, value, required, error, onChange }) =>
  <div className={classNames('form-checkbox', { error })}>
    <input
      type="checkbox"
      {...{
        name,
        required,
        onChange,
      }}
      checked={value}
    />
    <span />
  </div>;

/**
 * Declare expected property types.
 */
Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

/**
 * Set default properties.
 */
Checkbox.defaultProps = {
  onChange: () => {},
};

export default Checkbox;

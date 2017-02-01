/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { PropTypes } from 'react';

import './links.scss';

/**
 * This is the Links component class.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Links = ({ items }) =>
  <ul className="links" >
    {items.map(item =>
      <li>
        <a href={item.url}>{item.name}</a>
      </li>
    )}
  </ul>;

/**
 * Declare expected property types.
 */
Links.propTypes = {
  items: PropTypes.array,
};

/**
 * Set default properties.
 */
Links.defaultProps = {
  items: [],
};

export default Links;

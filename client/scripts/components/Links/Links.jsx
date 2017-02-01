/*
 * This file is part of the React Oslo Meetup VR Demo application.
 *
 * (c) Magnus Bergman <hello@magnus.sexy>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';

import links from 'data/links';

import './links.scss';

/**
 * This is the Links component.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Links = () =>
  <ul className="links" >
    {links.map(item =>
      <li>
        <a href={item.url}>{item.name}</a>
      </li>
    )}
  </ul>;

/**
 * Declare expected property types.
 */
Links.propTypes = {};

/**
 * Set default properties.
 */
Links.defaultProps = {};

export default Links;

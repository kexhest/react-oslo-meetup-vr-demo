/*
 * This file is part of the React Oslo Meetup VR Demo application.
 */

import React, { PropTypes } from 'react';

import Oslo from 'components/Oslo/Oslo';

import './demo.scss';

/**
 * This is the Demo component class.
 *
 * @author Magnus Bergman <magnus@apt.no>
 */
const Demo = ({ playing, name }) => {
  if (!playing) {
    return <div>WECOME TO THE DEMO!</div>;
  }

  let demo = null;

  switch (name) {
    case 'oslo':
      demo = <Oslo />;
      break;

    default:
      // no-op
  }

  return (
    <div className="demo">
      {demo}
    </div>
  );
};

/**
 * Declare expected property types.
 */
Demo.propTypes = {
  playing: PropTypes.bool,
  name: PropTypes.string,
};

/**
 * Set default properties.
 */
Demo.defaultProps = {
  playing: false,
  name: '',
};

export default Demo;

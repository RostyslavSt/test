import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

export default function Avatar (props) {
  return (
    <figure className="person-view">
      <div className="avatar-image"></div>
        <figurecaption>{props.name}</figurecaption>
    </figure>
  );
}

Avatar.propTypes = {
  name: PropTypes.string
};

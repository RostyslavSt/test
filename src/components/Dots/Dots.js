import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Dots = (props) => (
  <g>
    {this.props.data.map((d, i)=>(
      <circle className="dot" r="5" cx={this.props.x(d.date)}
              cy= {this.props.y(d[this.props.yData])} key={i} />))}
  </g>
);

Dots.propTypes = {
  data: PropTypes.array,
  yData: PropTypes.string,
  x: PropTypes.func,
  y: PropTypes.func
};

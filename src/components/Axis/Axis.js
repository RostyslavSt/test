import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

export default class Axis extends Component {
  componentDidUpdate () {
    this.renderAxis();
  }
  componentDidMount () {
    this.renderAxis();
  }
  renderAxis () {
    const axisOrient = `axis${this.props.orient}`;
    let axis = d3[axisOrient](this.props.scale)
          .ticks(this.props.ticks);

    if (this.props.format) {
      axis = axis.tickFormat(d3.timeFormat(this.props.format));
    }
    const node = ReactDOM.findDOMNode(this);

    d3.select(node).call(axis);
  }
  render () {
    const translate = `translate(0,${this.props.h})`;

    return (
      <g className = "axis"
         transform = {this.props.axisType === 'x' ? translate : ''} >
      </g>
    );
  }
}

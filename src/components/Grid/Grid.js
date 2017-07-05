import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

export default class Grid extends Component {
  componentDidUpdate () {
    this.renderGrid();
  }
  componentDidMount () {
    this.renderGrid();
  }
  renderGrid () {
    const axisOrient = `axis${this.props.orient}`;
    const axis = d3[axisOrient](this.props.scale)
      .ticks(this.props.ticks)
      .tickSize(-this.props.len, 0, 0)
      .tickFormat('');
    const node = ReactDOM.findDOMNode(this);

    d3.select(node).call(axis);
  }
  render () {
    const translate = `translate(0,${this.props.h})`;

    return (
      <g className = 'grid'
         transform = {this.props.gridType === 'x' ? translate : ''}>
      </g>
    );
  }
}

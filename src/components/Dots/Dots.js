import React, { Component } from 'react';

export default class Dots extends Component {
  render () {
    return (
      <g>
        {this.props.data.map((d, i)=>(
          <circle className="dot" r="5" cx={this.props.x(d.date)}
                  cy= {this.props.y(d[this.props.yData])} key={i} />))}
      </g>
    );
  }
}

Dots.propTypes = {
  data:React.PropTypes.array,
  x:React.PropTypes.func,
  y:React.PropTypes.func
};

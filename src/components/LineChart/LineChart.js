import './index.scss';
import React, { Component } from 'react';
import * as d3 from 'd3';
import Dots from '../Dots/Dots';
import Grid from '../Grid/Grid';
import Axis from '../Axis/Axis';

export default class LineChart extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const margin = { top: 5, right: 50, bottom: 20, left: 50 },
      w = this.props.width - (margin.left + margin.right),
      h = this.props.height - (margin.top + margin.bottom);
    const parseDate = d3.timeParse('%x');


    this.data = this.props.data.map((d) => {
      return Object.assign({}, d, { date: parseDate(d[this.props.xData]) });
    }).sort((a, b) => {
      return Date.parse(a[this.props.xData]) - Date.parse(b[this.props.xData]);
    });
    const x = d3.scaleTime()
      .domain(d3.extent(this.data, (d) => d.date))
      .rangeRound([0, w]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, (d) => d[this.props.yData])])
      .range([h, 0]);

    const line = d3.line()
      .x((d)=> x(d.date))
      .y((d)=> y(d[this.props.yData]))
      .curve(d3.curveCardinal);

    const transform = `translate(${margin.left},${margin.top})`;

    return (
      <div>
        <svg id={this.props.chartId}
             width={this.props.width}
             height={this.props.height}>
          <g transform={transform}>
            <Grid h={h} len={h} scale={x}
                  gridType="x" orient={'Bottom'} ticks={this.data.length / 2}/>
            <Grid h={h} len={w} scale={y}
                  gridType="y" orient={'Left'} ticks={this.data.length / 2}/>

            <Axis h={h} orient={'Left'} scale={y}
                  axisType="y" ticks={this.data.length / 2} />
            <Axis h={h} orient={'Bottom'} scale={x}
                  axisType="x" ticks={this.data.length} format={'%d/%m'}/>

            <path className="line shadow"
                  d={line(this.data)}
                  strokeLinecap="round"/>
            <Dots data={this.data} yData={this.props.yData} x={x} y={y}/>
          </g>
        </svg>
      </div>
    );
  }
}

LineChart.defaultProps = {
  width:800,
  height:300,
  xData:'day',
  yData:'count',
  chartId:'v1_chart',
  data:[
    { day:'02-11-2016', count:180 },
    { day:'02-12-2016', count:250 },
    { day:'02-13-2016', count:83 },
    { day:'02-14-2016', count:430 },
    { day:'02-15-2016', count:140 },
    { day:'02-16-2016', count:310 },
    { day:'02-17-2016', count:430 },
    { day:'02-18-2016', count:180 },
    { day:'02-19-2016', count:150 }
  ]
};

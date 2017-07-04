import React from 'react';
import LineChart from '../LineChart/LineChart';
import RangeSettings from
'../RangeSettings/Range';
import ToggleSettings from
'../ToggleSettings/Toggle';
import TimerSettings from
'../TimerSettings/Timer';
import ValueSettings from
'../ValueSettings/Value';
const ChartProps = {
  height:300,
  xData:'day',
  yData:'count',
  chartId:'v1_chart',
  data:[
    { day:'02/11/2016', count:180 },
    { day:'02/12/2016', count:250 },
    { day:'02/13/2016', count:83 },
    { day:'02/14/2016', count:430 },
    { day:'02/15/2016', count:140 },
    { day:'02/16/2016', count:310 },
    { day:'02/17/2016', count:430 },
    { day:'02/18/2016', count:180 },
    { day:'02/19/2016', count:150 }
  ]
};

const parentWidth = () => (
  document.querySelector('.DeviceProto').offsetWidth
);

const Components = {
  LineChart:LineChart,
  Range:RangeSettings,
  Timer:TimerSettings,
  Value:ValueSettings,
  Toggle:ToggleSettings
};

export const DeviceItems = (props) => (
  <div className="">
    {props.deviceProto.items.map((d, i)=>{
      const Item = Components[d.name];

      return <Item key={i} width={parentWidth()} { ...ChartProps }/>;
    })}
  </div>
);

import React from 'react';
import LineChart from '../LineChart/LineChart';
import SettingsWrapper from
'../SettingsWrapper/SettingsWrapper';
import RangeSettings from
'../RangeSettings/Range';
import ToggleSettings from
'../ToggleSettings/Toggle';
import TimerSettings from
'../TimerSettings/Timer';
import ValueSettings from
'../ValueSettings/Value';

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
  <div>
    {props.deviceProto.items.map((d, i)=>{
      const Item = Components[d.name];

      return (
        <SettingsWrapper key={i}
                         name={d.name}
                         deleteItem={props.deleteItem} id={i}>
          <Item width={parentWidth()}/>
        </SettingsWrapper>
      );
    })}
  </div>
);

import React from 'react';
import PropTypes from 'prop-types';
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
          <Item />
        </SettingsWrapper>
      );
    })}
  </div>
);

DeviceItems.propTypes = {
  deviceProto: PropTypes.object,
  deleteItem: PropTypes.func
};

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
  <div className="settings-block">
    {props.deviceProto.item.map((d, i) => {
      const Item = Components[d.name];

      return (
        <SettingsWrapper
          key={i}
          styleName={`settings-${d.name.toLowerCase()}`}
          name={d.name}
          deleteItem={props.deleteItem}
          id={i}>
          <Item width={800} height={200}/>
        </SettingsWrapper>
      );
    })}
  </div>
);

DeviceItems.propTypes = {
  deviceProto: PropTypes.object,
  width: PropTypes.number,
  deleteItem: PropTypes.func
};

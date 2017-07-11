import React from 'react';
import { setingsComponents } from '../../data/componentsNames';
import PropTypes from 'prop-types';
require('./Device.scss');

export const Device = (props) => {
  const device = props.device;
  const onStatusChange = props.onStatusChange;

  return (
    <seciton className="device-view">
      <div className="device-view__header">
        <div className="device-view__name">
          <h3>{device.name}</h3>
          <small>Last updated 7 days ago</small>
        </div>
        <div className="device-item__info-status">
          <label className="switch">
            <input
              type="checkbox"
              onChange={onStatusChange}
              checked={device.status}
            />
            <div className="slider round"></div>
          </label>
        </div>
        <div className="device-view__creation-info">
          <small>07.06.2017</small><br/>
          <small>User</small>
        </div>
      </div>
      <div className="device-view__location">
        <h4>
          <i className="fa fa-map-marker"></i>{device.location}
        </h4>
      </div>
      <section className="device-view__settings">
        {device.item.map((setting, i) => {
          const SettingsComponent = setingsComponents[setting.name];

          return (
            <SettingsComponent
            key={'setting' + i}
            styleName={
              'device-view__settings-item device-view__settings-'
                + setting.name.toLowerCase()
            }/>);
        })}
      </section>
    </seciton>
  );
};

Device.propTypes = {
  device: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func
};

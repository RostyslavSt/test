import React from 'react';
require('./DeviceListItem.scss');

const DeviceListItem = (props) => {
  const device = props.data;

  return (
    <div className="device-item">
      <p>{device.name}</p>
      <p>{device.location}</p>
      <p>{device.id}</p>
    </div>
  );
};

export default DeviceListItem;

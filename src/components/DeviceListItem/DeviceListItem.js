import React from 'react';
import { Link } from 'react-router-dom';
require('./DeviceListItem.scss');

const DeviceListItem = (props) => {
  const device = props.data;
  const match = props.match;

  return (
    <div className="device-item">
      <p>{device.name}</p>
      <p>{device.location}</p>
      <p>{device.id}</p>
      <Link className='btn' to={{
        pathname: match.url + 'device',
        search: '?deviceName='+ device.name + '&id=' + device.id
      }}>
        Go to device!!!
      </Link>
    </div>
  );
};

export default DeviceListItem;

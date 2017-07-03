import React from 'react';
import { Link } from 'react-router-dom';
require('./DeviceListItem.scss');

const DeviceListItem = (props) => {
  console.log(props.data);
  const device = props.data;
  const match = props.match;

  return (
    <div>
      <div className='device-item'>
        <div className='device-item__info'>
          <p className='device-item__info-name'>{device.name}</p>
          <div className="device-item__info-status">
            <label for='toggle' className="switch">
              <input id='toggle' type="checkbox" checked={device.status}/>
              <div className="slider round"></div>
            </label>
          </div>
        </div>
        <div className="device-item__description">
            <div className="device-item__description-location">
              {device.location}</div>
            <div className="device-item__description-icon">
              <div className="device-item__description-icon-delete">
                <i className="fa fa-trash"></i></div>
            </div>
        </div>
      </div>
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

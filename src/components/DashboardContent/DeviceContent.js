import React from 'react';
import PropTypes from 'prop-types';
import './DeviceContent.scss';

const DeviceContent = (props) => {
  const classForOnOff = 'device-on_off ' + props.power;

  return (
    <div className='device-item'>
        <div className='device-item__info device-item-name_and_power'>
          <div className='device-item__info-name'>
            {props.device.name}
          </div>
          <div className={classForOnOff}></div>
        </div>
        <div className="device-item__description">
            <div className="device-item__description-location">
              {props.device.location}</div>
        </div>
      </div>
  );
};

DeviceContent.propTypes = {
  device: PropTypes.object,
  power: PropTypes.string
};
export default DeviceContent;



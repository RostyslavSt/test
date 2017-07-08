import React from 'react';
import PropTypes from 'prop-types';
import './DeviceSingle.scss';

const DeviceSingle = (props) => {
  const classForOnOff = 'device-on_off ' + props.power;

  return (
    <div className='device-item'>
        <div className='device-item__info device-item-name_and_power'>
          <div className='device-item__info-name'>
            {props.device.name}
          </div>
          <div className={classForOnOff}></div>
          {/* <div className="device-item__info-status">
            <label className="switch">
              <input type="checkbox" checked={this.props.data.status}
                    onChange={this.onStatusChange}/>
              <div className="slider round"></div>
            </label>
          </div>*/}
        </div>
        <div className="device-item__description">
            <div className="device-item__description-location">
              {props.device.location}</div>
            {/* <div className="device-item__description-icon">
              <div className="device-item__description-icon-delete">
                <i className="fa fa-trash"></i></div>
            </div>*/}
        </div>
      </div>


  );
};

DeviceSingle.propTypes = {
  device: PropTypes.object,
  power: PropTypes.string
};
export default DeviceSingle;



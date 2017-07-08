import React from 'react';
import './ListDevices.scss';
import DeviceListItem from '../DeviceListItem/DeviceListItem';
import PropTypes from 'prop-types';

const DashboardListDevice = (props) => {
  return (
      <section className="list-device">
        list device
        {props.data.map((item, key) => {
          return (<li key={item.id}>
            {item.name} power: {item.location}
            {/* <DeviceListItem />*/}
            </li>);
        })
          }
      </section>
  );
};

DashboardListDevice.propTypes = {
  data: PropTypes.array
};

export default DashboardListDevice;

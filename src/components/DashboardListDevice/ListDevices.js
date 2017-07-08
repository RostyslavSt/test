import React from 'react';
import './ListDevices.scss';
import DeviceListItem from '../DeviceListItem/DeviceListItem';
import PropTypes from 'prop-types';
import DeviceSingle from './DeviceSingle.js';

const DashboardListDevice = (props) => {
  const arrDevices = [];
  let power = '';

  for (let i = 0; i < 3; i++) {
    if (props.data[i].status) {
      power = 'power-on';
    } else {
      power = 'power-off';
    }
    arrDevices.push(
      <li className="device-single" key={i}>
        <DeviceSingle device={props.data[i]} power={power}/>
      </li>
    );
  }
  return (
      <section className="list-device">
        {arrDevices}
      </section>
  );
};

DashboardListDevice.propTypes = {
  data: PropTypes.array
};

export default DashboardListDevice;


//  return (
//       <section className="list-device">
//         {props.data.map((item, key) => {
//           return (
//             <li key={item.id}>
//               <DeviceSingle device={item} />
//             </li>
//           );
//         })
//           }
//       </section>
//   );

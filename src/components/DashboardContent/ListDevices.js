import React from 'react';
import './ListDevices.scss';
import PropTypes from 'prop-types';
import DeviceContent from './DeviceContent.js';

const ListDevice = (props) => {
  const arrDevices = [];
  let power = '';
  const quantityDevices = 3;

  for (let i = 0; i < quantityDevices; i++) {
    if (props.data[i].status) {
      power = 'power-on';
    } else {
      power = 'power-off';
    }
    arrDevices.push(
      <li className="device-single" key={i}>
        <DeviceContent device={props.data[i]} power={power}/>
      </li>
    );
  }
  return (
      <section className="list-device">
        {arrDevices}
      </section>
  );
};

ListDevice.propTypes = {
  data: PropTypes.array
};

export default ListDevice;


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

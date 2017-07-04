import React from 'react';
import './List_devices.scss';
import  { data } from '../../test_data/list_device.json';

export default class DashboardListDevice extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log(data);
    return (
       <section className="list-device">
        list device
        {[4, 5, 9].map((item, key) => <li key={key}>{item}</li>
        ) }
      </section>
    );
  }
}

// function DashboardListDevice (props) {
//   return (
//     <section className="list-device">
//         list device
//     </section>
//   );
// }

// export default DashboardListDevice;

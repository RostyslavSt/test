import React from 'react';
import './ListDevices.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadDevicesRequest } from '../../actions/loadDashDevices.js';
import DeviceContent from './DeviceContent.js';


class ListDevice extends React.Component {
  constructor (props) {
    super(props);
    this.arrDevices = [];
    this.power = '';
    const quantityDevices = 3;
  }
  componentDidMount () {
    this.props.loadDevicesRequest();
  }
  render () {
    console.log(this.props.devices);
    console.log(33333);
    let power = '';
    const quantityDevices = 3;

    for (let i = 0; i < quantityDevices; i++) {
      if (this.props.devices[i].status) {
        power = 'power-on';
      } else {
        power = 'power-off';
      }
      this.arrDevices.push(
        <li className="device-single" key={i}>
          <DeviceContent device={this.props.devices[i]} power={power}/>
        </li>
      );
    }
    return (
      <section className="list-device">
        {this.arrDevices}
      </section>
    );
  }
}

ListDevice.propTypes = {
  devices: PropTypes.array,
  loadDevicesRequest: PropTypes.func
};

function mapStateToProps (store) {
  return {
    devices: store.loadDevicesReducer
  };
}
function mapDispatchToProps (dispatch) {
  return {
    loadDevicesRequest: bindActionCreators(loadDevicesRequest, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDevice);

// const ListDevice = (props) => {
//   const arrDevices = [];
//   let power = '';
//   const quantityDevices = 3;

//   for (let i = 0; i < quantityDevices; i++) {
//     if (props.data[i].status) {
//       power = 'power-on';
//     } else {
//       power = 'power-off';
//     }
//     arrDevices.push(
//       <li className="device-single" key={i}>
//         <DeviceContent device={props.data[i]} power={power}/>
//       </li>
//     );
//   }
//   return (
//       <section className="list-device">
//         {arrDevices}
//       </section>
//   );
// };

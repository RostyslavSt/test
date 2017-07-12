import React from 'react';
import './ListDevices.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadDevicesRequest } from '../../actions/loadDashDevices.js';
import DeviceContent from './DeviceContent.js';
import { filterItems } from '../../selectors';
import { loadDevicesAsync } from '../../actions/loadDevices.action';

class ListDevice extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.loadDevices();
  }
  render () {
    const listDevices = this.props.devices;
    const arrDevices = [];

    console.log(this.props.devices);
    console.log(33333);

    let power = '';
    const quantityDevices = 3;

    for (let i = 0; i < quantityDevices; i++) {
      if (listDevices[i].status) {
        power = 'power-on';
      } else {
        power = 'power-off';
      }
      arrDevices.push(
        <li className="device-single" key={i}>
          <DeviceContent device={listDevices[i]} power={power}/>
        </li>
      );
    }
    return (
      <section className="list-device">
        {arrDevices}
      </section>
    );
  }
}

ListDevice.propTypes = {
  devices: PropTypes.array,
  loadDevicesRequest: PropTypes.func
};

const mapStateToProps = state =>({
  devices: filterItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadDevices: () => dispatch(loadDevicesAsync())
});

ListDevice.propTypes = {
  devices: PropTypes.array,
  loadDevices: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDevice);


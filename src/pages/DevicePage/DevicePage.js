import React from 'react';
import { connect } from 'react-redux';
import DeviceList from '../DeviceList/DeviceList';
import { setingsComponents } from '../../data/componentsNames';
import LineChart from '../../components/LineChart/LineChart';
import PropTypes from 'prop-types';
import { loadDevice } from '../../actions/loadDevices.action';
require('./DevicePage.scss');

const Device = (props) => {
  const device = props.device;
  const onStatusChange = props.onStatusChange;

  return (
    <seciton className="device-view">
      <div className="device-view__header">
        <div className="device-view__name">
          <h3>{device.name}</h3>
          <small>Last updated 7 days ago</small>
        </div>
        <div className="device-item__info-status">
          <label className="switch">
            <input
              type="checkbox"
              onChange={onStatusChange}
              checked={device.status}
            />
            <div className="slider round"></div>
          </label>
        </div>
        <div className="device-view__creation-info">
          <small>07.06.2017</small><br/>
          <small>User</small>
        </div>
      </div>
      <div className="device-view__location">
        <h4>
          <i className="fa fa-map-marker"></i>{device.location}
        </h4>
      </div>
      <section className="device-view__settings">
        {device.item.map((setting, i) => {
          const SettingsComponent = setingsComponents[setting.name];

          return (
            <SettingsComponent
            key={'setting' + i}
            styleName={
              'device-view__settings-' + setting.name.toLowerCase()
            }/>);
        })}
      </section>
    </seciton>
  );
};

Device.propTypes = {
  device: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func
};

class DevicePage extends React.Component {
  constructor (props) {
    super(props);
    this.props.loadDevice(parseInt(this.props.match.params.id));
  }

  render () {
    const id = parseInt(this.props.match.params.id);
    const device = this.props.devices[0];

    return (
      <div>
        {this.props.devices.length === 0 ? <p>
            <i className="fa fa-3x fa-spinner fa-spin"></i>
          </p> : <Device device={device} onStatusChange={this.onStatusChange}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devicesList
});

const mapDispatchToProps = dispatch => ({
  loadDevice: (id) => dispatch(loadDevice(id))
});

DevicePage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
  devices: PropTypes.array,
  filter: PropTypes.array,
  filterAction: PropTypes.func,
  findItems: PropTypes.func,
  loadDevice: PropTypes.func
};


export default connect(mapStateToProps)(DevicePage);

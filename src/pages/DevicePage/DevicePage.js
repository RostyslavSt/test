import React from 'react';
import { connect } from 'react-redux';
import DeviceList from '../DeviceList/DeviceList';
import { components } from '../../data/constants';
require('./DevicePage.scss');


class DevicePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const id = parseInt(this.props.match.params.id);
    const device = this.props.devices.filter(item => item.id === id)[0];

    return (
      <div>
        <h1>Device page</h1>
        <div className="device-view-name"><h3>{device.name}</h3> </div>
        <div className="device-view-name"><h5>{device.location}</h5> </div>
        <div className="device-item__info-status">
          <label className="switch">
            <input type="checkbox" 
              onChange={this.onStatusChange}/>
            <div className="slider round"></div>
          </label>
        </div>
        {device.item.map((setting, i) => {
          const SettingsComponent = components[setting.name];

          return <SettingsComponent key={'setting' + i} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.itemReducer
});

export default connect(mapStateToProps)(DevicePage);

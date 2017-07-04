import React from 'react';
import { connect } from 'react-redux';
import DeviceList from '../DeviceList/DeviceList';
import { components } from '../../data/constants';
import queryString from 'query-string';


class DevicePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const deviceInfo = queryString.parse(this.props.location.search);
    const id = +deviceInfo.id;
    const device = this.props.devices.filter(item => item.id === id)[0];

    return (
      <div>
        <h1>Device page</h1>
        <div><b>Name:</b> {device.name}</div>
        <div><b>Location:</b> {device.location}</div>
        {device.item.map((setting, i) => {
          const SettingsComponent = components[setting.name];

          return <SettingsComponent key={'setting' + i} />;
        })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.items
});

export default connect(mapStateToProps)(DevicePage);

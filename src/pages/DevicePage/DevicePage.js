import React from 'react';
import { connect } from 'react-redux';
import DeviceList from '../DeviceList/DeviceList';
import { setingsComponents } from '../../data/componentsNames';
import LineChart from '../../components/LineChart/LineChart';
import PropTypes from 'prop-types';
require('./DevicePage.scss');

class DevicePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const id = parseInt(this.props.match.params.id);
    const device = this.props.devices.filter(item => item.id === id)[0];

    return (
      <div className="device-view">
        <div className="device-view__header">
          <div className="device-view__name">
            <h3>{device.name}</h3>
            <small>Last updated 7 days ago</small>
          </div>
        <div className="device-item__info-status">
          <label className="switch">
          <input type="checkbox"
                onChange={this.onStatusChange}/>
          <div className="slider round"></div>
          </label>
        </div>
        <div className="device-view__creation-info">
          <small>07.06.2017</small>
          <br/>
          <small>User</small>
        </div>
        </div>
        <div className="device-view__location">
          <h4>
            <i className="fa fa-map-marker"></i>{device.location}
          </h4>
        </div>
        <div className="device-view-2">
          <LineChart height={200} />
          <div className="device-view-2__notice">
            <ul>
              <li>
                <label>This is an example task that i need to finish</label>
              </li>
              <li>
                <label>Update server to a newer version</label>
              </li>
              <li>
                <label>Add more awesome template features</label>
              </li>
            </ul>
          </div>
        </div>
        {/* <RangeSettings/> */}
        {/* {device.item.map((setting, i) => {
          const SettingsComponent = components[setting.name];

          return <SettingsComponent key={'setting' + i} />;
        })} */}
</div>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.changeStatus
});

DevicePage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
  devices: PropTypes.array,
  filter: PropTypes.array,
  filterAction: PropTypes.func,
  findItems: PropTypes.func
};

export default connect(mapStateToProps)(DevicePage);

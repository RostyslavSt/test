import React from 'react';
import DashboardListDevices from
'../../components/DashboardContent/ListDevices';
import DashboardListPersons from
'../../components/DashboardContent/ListPersons';
import Notification from
'../../components/DashboardContent/Notification';
import jsonData from '../../data/data';
import './Dashboard.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deviceList from '../../api/dashListDeviceApi.js';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
     <div className='dashboard-block'>
        <div className='dashboard-devices-and-persons'>
          <DashboardListDevices data={jsonData} />
          <DashboardListPersons />
        </div>
        <Notification/>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  devices: state.devicesList
});

const mapDispatchToProps = dispatch => ({
});

Dashboard.propTypes = {
  devices: PropTypes.array
};

export default Dashboard;


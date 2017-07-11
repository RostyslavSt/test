import React from 'react';
import DashboardListDevices from
'../../components/DashboardContent/ListDevices';
import DashboardListUsers from
'../../components/DashboardContent/ListUsers';
import Notification from
'../../components/DashboardContent/Notification';
import jsonData from '../../data/data';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
     <div className='dashboard-block'>
        <div className='dashboard-devices-and-persons'>
          <DashboardListDevices data={jsonData} />
          <DashboardListUsers />
        </div>
        <Notification/>
      </div>
    );
  }
}


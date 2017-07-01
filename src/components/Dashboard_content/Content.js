import React from 'react';
import DashboardListDevices from '../Dashboard_list_device/List_devices';
import DashboardListPersons from '../Dashboard_list_persons/List_persons';
import Notification from '../Dashboard_notification/Notification';

import './Content.scss';

export default class DashboardContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main className='dashboard-content'>
        <div className='dashboard-content-row1'>
          <DashboardListDevices />
          <DashboardListPersons />
        </div>
        <Notification className='dashboard-content-row2'/>
      </main>
    );
  }
}


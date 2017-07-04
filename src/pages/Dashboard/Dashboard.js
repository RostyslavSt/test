import React from 'react';
import DashboardListDevices from
'../../components/DashboardListDevice/ListDevices.js';
import DashboardListPersons from
'../../components/DashboardListPersons/ListPersons.js';
import Notification from
'../../components/DashboardNotification/Notification.js';

import './Dashboard.scss';

export default class Dashboard extends React.Component {
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


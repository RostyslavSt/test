import React from 'react';
import DashboardListDevices from
'../../components/DashboardListDevice/ListDevices';
import DashboardListPersons from
'../../components/DashboardListPersons/ListPersons';
import Notification from
'../../components/DashboardNotification/Notification';

import './Dashboard.scss';

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main className='dashboard-block'>
        <div className='devices-persons'>
          <DashboardListDevices />
          <DashboardListPersons />
        </div>
        <Notification className='dashboard-notification'/>
      </main>
    );
  }
}


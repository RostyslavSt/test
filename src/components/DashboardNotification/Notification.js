import React from 'react';
import './Notification.scss';

export default class Notifications extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="dashboard-content-row2">
        <div className="dashboard-content-row2__notice">
          <span><i className="fa fa-bell-o"></i></span>
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
    );
  }
}

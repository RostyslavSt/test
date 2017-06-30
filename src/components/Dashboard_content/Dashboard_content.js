import React from 'react';
import './Dashboard_content.scss';

export default class DashboardContent extends React.Component {

  render () {
    return (
      <main className='dashboard-content'>
        {this.props.children}
      </main>
    );
  }
}


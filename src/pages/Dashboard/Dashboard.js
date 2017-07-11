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

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
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
  data: state
});

Dashboard.propTypes = {
  data: PropTypes.object
};

export default connect(mapStateToProps, {})(Dashboard);


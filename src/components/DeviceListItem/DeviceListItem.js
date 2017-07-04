import React from 'react';
import { Link } from 'react-router-dom';
require('./DeviceListItem.scss');

class DeviceListItem extends React.Component {  
  constructor (props) {   
    super(props);
    this.device = props.data;
    this.match = props.match;
    
    this.state = {
      status: this.device.status
    };
    this.onStatusChange = (e) => {
      this.props.changeStatus(this.props.index);
      this.setState({status: e.target.checked});
    };
  };
  
  render () {
    return (
      <div>
        <div className='device-item'>
          <div className='device-item__info'>
            <div className="device-item__info-status">
              <label className="switch">
                <input type="checkbox" checked={this.state.status} 
                      onChange={this.onStatusChange}/>
                <div className="slider round"></div>
              </label>
            </div>
            <Link className='device-item__info-name' to={{
              pathname: this.match.url + 'device',
              search: '?deviceName='+ this.device.name +
                          '&id=' + this.device.id
            }}>
              <p>{this.device.name}</p>
            </Link>               
          </div>
          <div className="device-item__description">
              <div className="device-item__description-location">
                {this.device.location}</div>
              <div className="device-item__description-icon">
                <div className="device-item__description-icon-delete">
                  <i className="fa fa-trash"></i></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DeviceListItem;

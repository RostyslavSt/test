import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
require('./DeviceListItem.scss');

class DeviceListItem extends React.Component {
  constructor (props) {
    super(props);

    this.onStatusChange = (e) => {
      this.props.changeStatus(this.props.data.id);
    };
  }

  render () {
    return (
      <div className='device-item'>
        <div className='device-item__info'>
          <Link className='device-item__info-name' to={
            `/devices/device/${this.props.data.id}`
          }>
            {this.props.data.name}
          </Link>
          <div className="device-item__info-status">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.props.data.status}
                onChange={this.onStatusChange}
              />
              <div className="slider round"></div>
            </label>
          </div>
        </div>
        <div className="device-item__description">
            <div className="device-item__description-location">
              {this.props.data.location}</div>
            <div className="device-item__description-icon">
              <div className="device-item__description-icon-delete">
                <i className="fa fa-trash"></i></div>
            </div>
        </div>
      </div>
    );
  }
}

DeviceListItem.propTypes = {
  changeStatus: PropTypes.func,
  data: PropTypes.shape({
    status: PropTypes.boolean,
    id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string
  })
};

export default DeviceListItem;

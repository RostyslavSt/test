import './deviceForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  addItem,
  setValue,
  resetProto
} from '../../actions/deviceProtoActions';
import { addDevice } from '../../actions/devicesActions';
import { connect } from 'react-redux';

const itemsToChoose = [
  'Toggle',
  'Timer',
  'LineChart',
  'Value',
  'Range'
];

class DeviceForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
    this.id = 0;
  }

  setId () {
    return this.id++;
  }

  addItem = (e) => {
    const newItem = {
      id: this.setId(),
      name: e.target.value
    };

    this.props.addItem(newItem);
  };

  createButton = (label, index) => {
    return (<input
        key={ index }
        type="button"
        className="form-button"
        onClick={ this.addItem }
        value={ label }
      />
    );
  };

  createButtons () {
    return itemsToChoose.map(this.createButton);
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setValue(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDevice(this.props.deviceProto);
    this.props.resetProto();
    this.props.router.push('/devices');
  };


  render () {
    return (
      <form className="device-form" onSubmit={ this.handleSubmit }>
        <div className="input-container">
        <label>Name:</label> <br />
        <input name="name" type="text" value={ this.props.deviceProto.name }
               onChange={ this.handleUserInput } />
        </div>
        <div className="input-container">
         <label>Location:</label> <br />
          <select name="location"
                  value={ this.props.deviceProto.location }
                  onChange={ this.handleUserInput }>
            <option value=""></option>
            <option value="living room"><div>Living room</div></option>
            <option value="bedroom"><div>Bedroom</div></option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
        <div>
          <label> Device config:</label> <br />
          { this.createButtons() }
        </div>
        <input className="main-button form-button" type="submit" value="Add" />
      </form>
    );
  }
}
function mapStateToProps (store) {
  return {
    deviceProto: store.deviceProto
  };
}
function mapDispatchToProps (dispatch) {
  return {
    setValue: bindActionCreators(setValue, dispatch),
    addItem:  bindActionCreators(addItem, dispatch),
    resetProto: bindActionCreators(resetProto, dispatch),
    addDevice: bindActionCreators(addDevice, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm);

DeviceForm.propTypes = {
  setValue: PropTypes.func,
  addItem: PropTypes.func,
  resetProto: PropTypes.func,
  addDevice:  PropTypes.func,
  deviceProto: PropTypes.object,
  router: PropTypes.any
};

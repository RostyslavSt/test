import './deviceForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
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

const locationOptions = [
  { value: 'living room', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'hallway', label: 'Hallway' }
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

  handleSelectLocation = (val) => {
    this.props.setValue('location', val);
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
        <input
          className="name-input"
          required
          name="name" type="text"
          value={ this.props.deviceProto.name }
          onChange={ this.handleUserInput } />
        </div>
        <div className="input-container">
         <label>Location:</label> <br />
          <Select
            name="location"
            required
            placeholder="select location"
            options={ locationOptions }
            onChange={ this.handleSelectLocation }
            value={ this.props.deviceProto.location }
          />
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

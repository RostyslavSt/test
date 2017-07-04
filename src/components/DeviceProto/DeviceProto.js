import React, { Component } from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import LineChart from '../LineChart/LineChart';
import {
  addItem,
  setValue,
  resetProto
} from '../../actions/deviceProtoActions';
import { connect } from 'react-redux';
import { DeviceItems } from '../DeviceItems/DeviceItems.js';

const ab = {
  width:'50%'
};

class DeviceProto extends Component {
  render () {
    return (
      <div style={ab} className='DeviceProto'>
        <p>{this.props.deviceProto.name}</p>
        <DeviceItems deviceProto={this.props.deviceProto} />
      </div>
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
    resetProto: bindActionCreators(resetProto, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceProto);

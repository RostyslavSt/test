import React, { Component } from 'react';
import DeviceForm from '../../components/DeviceForm/deviceForm.js';
import DeviceProto from '../../components/DeviceProto/DeviceProto.js';

export default class Builder extends Component {
  render () {
    return (
      <div className='flex'>
        <DeviceProto />
        <DeviceForm router={this.props.history}/>
      </div>
    );
  }
}

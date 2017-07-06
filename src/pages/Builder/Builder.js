import React, { Component } from 'react';
import DeviceForm from '../../components/DeviceForm/deviceForm.js';
import DeviceProto from '../../components/DeviceProto/DeviceProto.js';
import PropTypes from 'prop-types';

export const Builder = (props) => (
      <div className='builder'>
        <DeviceForm router={props.history}/>
        <DeviceProto />
      </div>
);

Builder.propTypes = {
  history: PropTypes.object
};

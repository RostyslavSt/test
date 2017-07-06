import React, { Component } from 'react';
import DeviceForm from '../../components/DeviceForm/deviceForm.js';
import DeviceProto from '../../components/DeviceProto/DeviceProto.js';
import PropTypes from 'prop-types';

export const Builder = (props) => (
      <div className='flex'>
        <DeviceProto />
        <DeviceForm router={props.history}/>
      </div>
);

Builder.propTypes = {
  history: PropTypes.object
};

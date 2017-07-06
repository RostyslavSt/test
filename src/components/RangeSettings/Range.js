import React from 'react';
import PropTypes from 'prop-types';
import './RangeStyle.scss';
import '../SettingsWrapper/SettingsWrapperStyle.scss';

export default class RangeSettings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    });
    this.props.setDevice('range', e.target.value);
  }

  render () {
    const { max, min } = this.props;

    return (
      <div className='item-body'>
        <p className='range_value'>
          {this.state.value}</p>
        <input
          type='range'
          onChange={ this.onChange }
          min={min || 0}
          max={max || 100}
          step={1}
          defaultValue={0}
        />
      </div>
    );
  }
}

RangeSettings.propTypes = {
  max: PropTypes.string,
  min: PropTypes.string,
  setDevice: PropTypes.func,
  sendRangeValue: PropTypes.func
};

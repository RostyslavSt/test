import React from 'react';
import PropTypes from 'prop-types';
import './RangeStyle.scss';

export default class RangeSettings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: 0,
      isRangeOn: props.isSliderOn || true
    };

    this.onChange = this.onChange.bind(this);
    this.deleteRange = this.deleteRange.bind(this);
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    });
   // this.props.sendRangeValue(e.target.value);
  }

  deleteRange (e) {
    this.setState({
      isRangeOn: false
    });
  }

  render () {
    const {max, min} = this.props;

    return (
      <div className='range_block'>
      {this.state.isRangeOn ?
      <p className='device_name'>
      Range</p>:
      null }
         {this.state.isRangeOn ?
         <p className='range_value'>
          {this.state.value}</p>:
          null }
        {this.state.isRangeOn ?
        <input
          type='range'
          onChange={this.onChange}
          min={min || 0}
          max={max || 100}
          step={1}
          defaultValue={0}
        />:
        null }
        {this.state.isRangeOn ?
        <button className='delete_range'
        onClick={this.deleteRange}
        />:
        null }
        </div>
    );
  }
}

RangeSettings.propTypes = {
  max: PropTypes.string,
  min: PropTypes.string,
  sendRangeValue: PropTypes.func.isRequired
};

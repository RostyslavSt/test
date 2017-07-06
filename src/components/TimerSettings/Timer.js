import React from 'react';
import PropTypes from 'prop-types';
import './TimerStyle.scss';

export default class TimerSettings extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: props.value || '00:00:00'
    };

    this.onChangeTime = this.onChangeTime.bind(this);
    this.timerOff = this.timerOff.bind(this);
  }

  onChangeTime (e) {
    this.setState({
      value: e.target.value
    });

    this.props.sendTimerValue(e.target.value);
  }

  timerOff (e) {
    this.setState({
      isTimerOn: false
    });
  }

  render () {
    return (
      <div className="item-body quantity">
         <input
            type="time"
            className="timer_set"
            min="1"
            max="24"
            step="1"
            value={this.state.value}
            onChange={this.onChangeTime}
          />
      </div>
    );
  }
}

TimerSettings.propTypes = {
  value: PropTypes.string,
  sendTimerValue: PropTypes.func
};

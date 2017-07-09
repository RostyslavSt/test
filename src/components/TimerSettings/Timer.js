import React from 'react';
import PropTypes from 'prop-types';
import './TimerStyle.scss';
import RangeSettings from '../RangeSettings/Range';

export default class TimerSettings extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0
    };

    this.changeHours = this.changeHours.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
  }

  changeHours (event) {
    this.setState({
      hours: event.target.value
    });
  }

  changeMinutes (event) {
    this.setState({
      minutes: event.target.value
    });
  }

  render () {
    return (
      <div className="m-time">
        <div className="showtime">
          <span className="time">{this.state.hours}</span>
          <span className="separater">:</span>
          <span className="time">{this.state.minutes}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={23}
            useInitialValue={true}
            initialValue={this.state.hours}
            onChange={this.changeHours}
            hideLabel={true}
          />
          <div className="time-text">Minutes</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={59}
            useInitialValue={true}
            initialValue={this.state.minutes}
            onChange={this.changeMinutes}
            hideLabel={true}
          />
        </div>
      </div>
    );
  }
}
TimerSettings.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.any,
  moment: PropTypes.any,
  InputSlider: PropTypes.any
};

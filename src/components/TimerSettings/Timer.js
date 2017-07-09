import React from 'react';
import PropTypes from 'prop-types';
import './TimerStyle.scss';
import RangeSettings from '../RangeSettings/Range';
import moment from 'moment';

export default class TimerSettings extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      m: moment()
    };

    this.changeHours = this.changeHours.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
  }

  changeHours (event) {
    const newMoment = this.state.m.hours(parseInt(event.target.value, 10));

    this.setState({ m: newMoment });
  }

  changeMinutes (event) {
    const newMoment = this.state.m.minutes(parseInt(event.target.value, 10));

    this.setState({ m: newMoment });
  }

  render () {
    return (
      <div className="m-time">
        <div className="showtime">
          <span className="time">{this.state.m.format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{this.state.m.format('mm')}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={23}
            useInitialValue={true}
            initialValue={this.state.m.hour()}
            onChange={this.changeHours}
            hideLabel={true}
          />
          <div className="time-text">Minutes</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={59}
            useInitialValue={true}
            initialValue={this.state.m.minute()}
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

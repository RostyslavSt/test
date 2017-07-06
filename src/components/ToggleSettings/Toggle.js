import React from 'react';
import PropTypes from 'prop-types';
import './ToggleStyle.scss';


export default class ToggleSettings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: props.checked
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange () {
    this.setState({
      value: !this.state.value
    });
    this.props.sendToggleValue(!this.state.value);
  }


  render () {
    return (
      <div className='settings_block'>
      <span className='top_border'>
      <div className='device-item__info'>
          <div className="device-item__info-status">
            <label className="switch">
              <input type="checkbox" checked={this.state.value}
                    onClick={this.onChange}/>
              <div className="slider round"></div>
            </label>
          </div>
        </div>
      </span>
      </div>
    );
  }
}

ToggleSettings.propTypes = {
  checked: PropTypes.bool,
  sendToggleValue: PropTypes.func.isRequired
};

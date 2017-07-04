import React from 'react';
import PropTypes from 'prop-types';
import './ToggleStyle.scss';


export default class ToggleSettings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: props.checked,
      isToggleOn: props.isToggleOn || true
    };

    this.onChange = this.onChange.bind(this);
    this.deleteToggle = this.deleteToggle.bind(this);
  }

  onChange () {
    this.setState({
      value: !this.state.value
    });
    this.props.sendToggleValue(!this.state.value);
  }

  deleteToggle () {
    this.setState({
      isToggleOn: false
    });
  }

  render () {
    return (
      <div className='toggle_block'>
      {this.state.isToggleOn ?
        <div className='onoffswitch'>
         <input
            type='checkbox'
            name='onoffswitch'
            className='onoffswitch-checkbox'
            id='myonoffswitch'
            checked={this.state.value}
          />
           <label className='onoffswitch-label'
           htmlFor='myonoffswitch'
           onClick={this.onChange}>
              <span className='onoffswitch-inner'></span>
              <span className='onoffswitch-switch'></span>
          </label>
        </div>:
        null
      }
        {this.state.isToggleOn ?
        <p className='toggle_name'>
        Toggle</p>:
        null }
        {this.state.isToggleOn ?
        <button type='button'
        onClick={this.deleteToggle}
        className='delete_toggle'
        />:
        null }
       </div>
    );
  }
}

ToggleSettings.propTypes = {
  checked: PropTypes.bool,
  sendToggleValue: PropTypes.func
};
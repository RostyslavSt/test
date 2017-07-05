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
      <div className='toggle_block'>
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
        </div>
      </div>
    );
  }
}

ToggleSettings.propTypes = {
  checked: PropTypes.bool,
  sendToggleValue: PropTypes.func
};

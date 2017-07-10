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
      <div className={ `${ this.props.styleName }` }>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.value}
            onClick={this.onChange}
          />
          <div className="slider round"></div>
        </label>
      </div>
    );
  }
}

ToggleSettings.propTypes = {
  styleName: PropTypes.string,
  checked: PropTypes.bool,
  sendToggleValue: PropTypes.func
};

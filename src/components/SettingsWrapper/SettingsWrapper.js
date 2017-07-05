import React from 'react';
import './SettingsWrapperStyle.scss';

export default class SettingsWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isSettingOn: props.isSettingOn || true
    };

    this.deleteSettings = this.deleteSettings.bind(this);
  }

  deleteSettings (e) {
    this.setState({
      isSettingOn: false
    });
  }

  render () {
    return (
      <div className='settings_grid'>
        <p className='device_name'>{this.props.name}</p>
        <button className='delete_device_settings'
                onClick={()=>this.props.deleteItem(this.props.id)}/>
        {this.props.children}
      </div>
    );
  }
}

import React from 'react';
import './SettingsWrapperStyle.scss';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class SettingsWrapper extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='settings'>
        <div className='item-header'>
          <p className='item-header__name'>{this.props.name}</p>
          <button
            className='item-header__delete-btn'
            onClick={()=>this.props.deleteItem(this.props.id)}
          />
        </div>
        { this.props.children }
      </div>
    );
  }
}

SettingsWrapper.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isSettingOn: PropTypes.bool,
  deleteItem: PropTypes.func.isRequired,
  children: PropTypes.any
};

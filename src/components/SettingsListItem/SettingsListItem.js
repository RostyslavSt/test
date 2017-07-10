import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export default class SettingsListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      calcWidth: 200
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.setChildWidth);
    this.setChildWidth();
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.setChildWidth);
  }
  setChildWidth = () => {
    this.setState({
      childWidth: this.getElementWidth()
    });
  }
  getElementWidth () {
    const ELEMENT_WIDTH = 0.85;

    return document.querySelector('.Prototype')
      .offsetWidth * ELEMENT_WIDTH;
  }
  render () {
    return (
      <div className={ `settings ${ this.props.styleName }` }>
        <div className='item-header'>
          <p className='item-header__name'>{this.props.name}</p>
          <button
            className='item-header__delete-btn'
            onClick={()=>this.props.deleteItem(this.props.id)}
          />
        </div>
        { React.cloneElement(this.props.children, {
          styleName: 'item-body',
          width: this.state.childWidth
        })}
      </div>
    );
  }
}

SettingsListItem.propTypes = {
  styleName: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  deleteItem: PropTypes.func.isRequired,
  children: PropTypes.any
};

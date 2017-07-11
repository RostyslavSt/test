import React from 'react';
import './ListPersons.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import users from '../../data/users.json';
import Avatar from '../Avatar/Avatar';

class ListPersons extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch({ type: 'UPDATE_STATUS_PERSONS' });
  }

  render () {
    const listAtHome = users.filter((item) => (item.home));

    // listAtHome.filter((item) => (item.home));
    return (
      <section className='list-persons'>
        {listAtHome.map((item, key) => {
          return (
            <li key={item.id}>
              <Avatar name={item.name} />
            </li>
          );
        })}
      </section>
    );
  }
}

ListPersons.propTypes = {
  currentPersons: PropTypes.array,
  dispatch: PropTypes.func
};

function mapStateToProps (store) {
  return {
    currentPersons: store.currentPersons
  };
}

export default connect(mapStateToProps)(ListPersons);

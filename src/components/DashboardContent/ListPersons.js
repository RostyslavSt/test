import React from 'react';
import './ListPersons.scss';
import jsonPersons from '../../data/person.json';
import Avatar from '../Avatar/Avatar';

export default class ListPersons extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const listAtHome = jsonPersons.filter((item) => (item.home));

    return (
      <section className='list-persons'>
        {listAtHome.map((item, key) => {
          return (
            <li key = {item.id}>
              <Avatar name={item.name}/>
            </li>
          );
        })}
      </section>
    );
  }
}

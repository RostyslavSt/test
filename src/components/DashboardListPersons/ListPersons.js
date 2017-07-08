import React from 'react';
import './ListPersons.scss';
import jsonPersons from '../../data/person.json';
import Avatar from '../Avatar/Avatar';

export default class DashboardListPersons extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const listAtHome = jsonPersons.filter((item) => {
      return (item.home);
    });

    const listNotAtHome = jsonPersons.filter((item) => {
      return (!item.home);
    });

    return (
      <section className='list-persons'>
        list person
        {listAtHome.map((item, key) => {
          return (
            <li key = {key} style={{ color: 'lightgreen',
              listStyleType: 'none',
              padding: '5px' }}>
              <Avatar name={item.name}/>
            </li>
          );
        })}
        {listNotAtHome.map((item, key) => {
          return (
            <li key = {key} style={{ color: 'red',
              listStyleType: 'none',
              padding: '5px' }}>
              <Avatar name={item.name}/>
             </li>
          );
        })}
      </section>
    );
  }
}

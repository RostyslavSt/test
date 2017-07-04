import React from 'react';
import './ListDevices.scss';
import jsonData from '../../dataDash/data.json';

export default class DashboardListDevice extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log(jsonData);
    return (
      <section className="list-device">
        list device
        {jsonData.map((item, key) => {
          return (<li key={key}>
            {item.name} power: {item.location}
            </li>);
        })
          }
      </section>
    );
  }
}

import React from 'react';
import './ListDevices.scss';
import jsonData from '../../data/data.json';

export default function DashboardListDevice (props) {
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

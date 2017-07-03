import React from 'react';
import { data } from '../../data/data';
import DeviceList from '../DeviceList/DeviceList';
import Range from '../../components/Range/Range';
import queryString from 'query-string';


export default class DevicePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const deviceInfo = queryString.parse(this.props.location.search);
    const id = +deviceInfo.id;
    const device = data.filter(item => item.id === id)[0];

    return (
      <div>
        <h1>Device page</h1>
        <div><b>Name:</b> {device.name}</div>
        <div><b>Location:</b> {device.location}</div>
        {device.items.map((item, i) => {
          switch (item.type) {
            case 'range':
              return (<Range key={item.name + i} />);
            case 'button':
              return (<p key={item.name + i}>
                This is will be component with type {item.type}.</p>);
            case 'value':
              return (<p key={item.name + i}>
                This is will be component with type {item.type}.</p>);
            case 'graph':
              return (<p key={item.name + i}>
                This is will be component with type {item.type}.</p>);
            case 'timer':
              return (<p key={item.name + i}>
                This is will be component with type {item.type}.</p>);
            default:
              return (<p>There is no any Settings yet</p>);
          }
        })}
      </div>
    );
  }
}

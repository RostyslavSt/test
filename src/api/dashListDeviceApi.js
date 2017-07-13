import devices from '../data/data.json';

const ListDevices = [...devices];
const deviceList = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([...ListDevices]);
  }, 10000);
});

export default deviceList;

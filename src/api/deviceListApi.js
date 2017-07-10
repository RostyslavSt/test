import devices from '../data/data.json';

export default class DeviceListApi {
  static getDevices () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...devices]);
      }, 2000);
    });
  }
  static getDevice (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let device;

        devices.map((item) => {
          if (item.id === id) {
            device = Object.assign({}, item);
          }
        });
        resolve(device);
      }, 2000);
    });
  }
  static deleteDevice (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 500);
    });
  }
}

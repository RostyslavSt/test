import devices from '../data/data.json';

export default class DeviceListApi {
  static devices = devices;
  static getDevices () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...this.devices]);
      }, 2000);
    });
  }
  static addDevice (device) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        device.id = this.devices.length + 1;
        this.devices = [...this.devices, device];
        resolve(device);
      }, 2000);
    });
  }
  static getDevice (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let device;

        this.devices.map((item) => {
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
      }, 300);
    });
  }
}

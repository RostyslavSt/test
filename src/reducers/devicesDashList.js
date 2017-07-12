const loadDevicesReducer = (state = { devices: [] }, action) => {
  switch (action.type) {
    case 'LOAD_DEVICES_ASYNC': {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
};

export default loadDevicesReducer;


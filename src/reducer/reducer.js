export function itemReducer (state, action) {
  switch (action.type) {
    case 'CHANGE_STATUS':
      let device = state[action.index];
      device.status = !device.status;
      return state;
    default:
      return state;
  }
}


export function devices (state = [], action) {
  switch (action.type) {
    case 'ADD_DEVICE':
      return  [...state, action.device];
    default:
      return state;
  }
}

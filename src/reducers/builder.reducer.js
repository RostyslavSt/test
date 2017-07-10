const deviceProto = (state = {
  name: '',
  location: '',
  item: []
}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, { item:[...state.item, action.item] });
    case 'SET':
      return Object.assign({}, state, { [action.name]: action.value });
    case 'RESET_DEVICE_BUILDER_FORM':
      return { name: '', location: '', item: [] };
    case 'DELETE_ITEM':
      return ({
        ...state,
        items:state.items.filter((item, i) => action.id !== i)
      });
    default:
      return state;
  }
};

export default deviceProto;

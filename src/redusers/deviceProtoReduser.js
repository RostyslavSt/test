export function deviceProto (state = {
  name: '',
  location: '',
  items: []
}, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { items:[...state.items, action.item] });
    case 'SET':
      return Object.assign({}, state, { [action.name]: action.value });
    case 'RESET':
      return { name: '', location: '', items: [] };
    case 'DELETE':
      return ({
        ...state,
        items:state.items.filter((item, i) => action.id !== i)
      });
    default:
      return state;
  }
}

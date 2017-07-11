const loadUsersSuccess = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_USERS': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default loadUsersSuccess;

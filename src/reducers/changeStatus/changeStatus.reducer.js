import { CHANGE_STATUS } from '../../constants/constants';
import jsonData from '../../data/data.json';

const changeStatus = (state = jsonData, action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      const newState = state.map((item) => (
        Object.assign({}, item)
      ));

      newState.map((item, i) => {
        if (item.id === action.id) {
          newState[i].status = !newState[i].status;
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

export default changeStatus;

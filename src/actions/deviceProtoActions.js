export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};
export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  };
};

export const setValue = (name, value) => {
  return {
    type: 'SET',
    name,
    value
  };
};

export const resetProto = () => {
  return {
    type: 'RESET_DEVICE_BUILDER_FORM'
  };
};


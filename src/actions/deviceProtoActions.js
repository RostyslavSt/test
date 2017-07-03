export const addItem = (item) => {
  return {
    type: 'ADD',
    item
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
    type: 'RESET'
  };
};


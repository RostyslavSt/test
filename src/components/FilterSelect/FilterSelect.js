import React from 'react';
require('./FilterSelect.scss');

const FilterSelect = (props) => {
  return (
    <select onChange={e => props.handleSelect(e.target.value)}>
      {props.options.map(item =>
        <option value={item.value} key={item.value}>{item.innerText}</option>
      )}
    </select>
  );
};

export default FilterSelect;

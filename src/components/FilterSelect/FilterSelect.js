import React from 'react';
require('./FilterSelect.scss');

const FilterSelect = (props) => {
  return (
    <div className="filterBox">
      <select onChange={e => props.handleSelect(e.target.value)}>
        {props.options.map(item =>
          <option value={item.value} key={item.value}>{item.innerText}</option>
        )}
      </select>
    </div>
  );
};

export default FilterSelect;

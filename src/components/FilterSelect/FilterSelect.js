import React from 'react';
import PropTypes from 'prop-types';
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

FilterSelect.PropTypes = {
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.shape({
    value: PropTypes.string,
    innerText: PropTypes.string
  })
};

export default FilterSelect;
